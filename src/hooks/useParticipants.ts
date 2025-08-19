import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Participant {
  id: string;
  name: string;
  email: string;
  requested_quote: boolean;
  received_quote: boolean;
  paid_deposit: boolean;
  email_1_sent: boolean;
  email_2_sent: boolean;
  email_3_sent: boolean;
  paid_remaining_balance: boolean;
  created_at: string;
}

export interface AddParticipantData {
  name: string;
  email: string;
}

export const useParticipants = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchParticipants = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('participants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setParticipants(data || []);
    } catch (error: any) {
      console.error('Error fetching participants:', error);
      toast({
        title: "Error",
        description: "Failed to fetch participants",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addParticipant = async (data: AddParticipantData) => {
    try {
      const { data: newParticipant, error } = await supabase
        .from('participants')
        .insert([data])
        .select()
        .single();

      if (error) throw error;
      
      setParticipants(prev => [newParticipant, ...prev]);
      toast({
        title: "Success",
        description: "Participant added successfully",
      });
      return { success: true };
    } catch (error: any) {
      console.error('Error adding participant:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to add participant",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    }
  };

  const updateParticipant = async (id: string, updates: Partial<Participant>) => {
    console.log('updateParticipant called:', { id, updates });
    try {
      const { data, error } = await supabase
        .from('participants')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      console.log('Supabase update response:', { data, error });

      if (error) throw error;

      setParticipants(prev =>
        prev.map(p => (p.id === id ? { ...p, ...data } : p))
      );
      
      toast({
        title: "Success",
        description: "Participant updated successfully",
      });
    } catch (error: any) {
      console.error('Error updating participant:', error);
      toast({
        title: "Error",
        description: "Failed to update participant",
        variant: "destructive",
      });
    }
  };

  const deleteParticipant = async (id: string) => {
    try {
      const { error } = await supabase
        .from('participants')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setParticipants(prev => prev.filter(p => p.id !== id));
      toast({
        title: "Success",
        description: "Participant deleted successfully",
      });
    } catch (error: any) {
      console.error('Error deleting participant:', error);
      toast({
        title: "Error",
        description: "Failed to delete participant",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return {
    participants,
    loading,
    addParticipant,
    updateParticipant,
    deleteParticipant,
    refetch: fetchParticipants,
  };
};