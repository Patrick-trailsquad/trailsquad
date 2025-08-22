import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface TimelineItem {
  id: string;
  destination: string;
  title: string;
  date: Date;
  type: 'registration' | 'payment' | 'event' | 'deadline' | 'milestone';
  description?: string;
  created_by?: string;
  created_at: Date;
  updated_at: Date;
}

interface AddTimelineItemData {
  destination: string;
  title: string;
  date: Date;
  type: TimelineItem['type'];
  description?: string;
}

export const useTimelineItems = (destination?: string) => {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchItems = async () => {
    try {
      setLoading(true);
      console.log('Fetching timeline items for destination:', destination);
      console.log('User authenticated:', !!user);
      
      let query = supabase
        .from('timeline_items')
        .select('*')
        .order('date', { ascending: true });

      if (destination) {
        query = query.eq('destination', destination);
      }

      const { data, error } = await query;
      console.log('Timeline items query result:', { data, error, destination });

      if (error) {
        console.error('Error fetching timeline items:', error);
        toast.error('Failed to load timeline items');
        return;
      }

      const formattedItems: TimelineItem[] = (data || []).map(item => ({
        ...item,
        date: new Date(item.date),
        created_at: new Date(item.created_at),
        updated_at: new Date(item.updated_at),
        type: item.type as TimelineItem['type'], // Cast to proper type
      }));

      console.log('Formatted timeline items:', formattedItems);
      setItems(formattedItems);
    } catch (error) {
      console.error('Error in fetchItems:', error);
      toast.error('Failed to load timeline items');
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (itemData: AddTimelineItemData) => {
    try {
      const { data, error } = await supabase
        .from('timeline_items')
        .insert({
          destination: itemData.destination,
          title: itemData.title,
          date: itemData.date.toISOString(),
          type: itemData.type,
          description: itemData.description,
          created_by: user?.id,
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding timeline item:', error);
        toast.error('Failed to add timeline item');
        return;
      }

      const newItem: TimelineItem = {
        ...data,
        date: new Date(data.date),
        created_at: new Date(data.created_at),
        updated_at: new Date(data.updated_at),
        type: data.type as TimelineItem['type'], // Cast to proper type
      };

      setItems(prev => [...prev, newItem].sort((a, b) => a.date.getTime() - b.date.getTime()));
      toast.success('Timeline item added successfully');
    } catch (error) {
      console.error('Error in addItem:', error);
      toast.error('Failed to add timeline item');
    }
  };

  const updateItem = async (id: string, updates: Partial<AddTimelineItemData>) => {
    try {
      const updateData: any = { ...updates };
      if (updateData.date) {
        updateData.date = updateData.date.toISOString();
      }

      const { data, error } = await supabase
        .from('timeline_items')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating timeline item:', error);
        toast.error('Failed to update timeline item');
        return;
      }

      const updatedItem: TimelineItem = {
        ...data,
        date: new Date(data.date),
        created_at: new Date(data.created_at),
        updated_at: new Date(data.updated_at),
        type: data.type as TimelineItem['type'], // Cast to proper type
      };

      setItems(prev => 
        prev.map(item => item.id === id ? updatedItem : item)
           .sort((a, b) => a.date.getTime() - b.date.getTime())
      );
      toast.success('Timeline item updated successfully');
    } catch (error) {
      console.error('Error in updateItem:', error);
      toast.error('Failed to update timeline item');
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('timeline_items')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting timeline item:', error);
        toast.error('Failed to delete timeline item');
        return;
      }

      setItems(prev => prev.filter(item => item.id !== id));
      toast.success('Timeline item deleted successfully');
    } catch (error) {
      console.error('Error in deleteItem:', error);
      toast.error('Failed to delete timeline item');
    }
  };

  useEffect(() => {
    fetchItems();
  }, [destination]);

  return {
    items,
    loading,
    addItem,
    updateItem,
    deleteItem,
    refetch: fetchItems,
  };
};