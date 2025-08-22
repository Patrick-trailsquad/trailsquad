import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import { format, isAfter, isBefore, differenceInDays, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

interface GanttItem {
  id: string;
  title: string;
  date: Date;
  type: 'registration' | 'payment' | 'event' | 'deadline' | 'milestone';
  description?: string;
  color?: string;
}

interface GanttChartProps {
  destinationName: string;
}

const ITEM_TYPES = [
  { value: 'registration', label: 'Registration', color: 'bg-blue-500' },
  { value: 'payment', label: 'Payment', color: 'bg-yellow-500' },
  { value: 'event', label: 'Event', color: 'bg-green-500' },
  { value: 'deadline', label: 'Deadline', color: 'bg-red-500' },
  { value: 'milestone', label: 'Milestone', color: 'bg-purple-500' },
];

export const GanttChart: React.FC<GanttChartProps> = ({ destinationName }) => {
  const [items, setItems] = useState<GanttItem[]>([
    {
      id: '1',
      title: 'Registration Opens',
      date: new Date(2024, 2, 1),
      type: 'registration',
      description: 'Start accepting participants'
    },
    {
      id: '2', 
      title: 'Early Bird Deadline',
      date: new Date(2024, 3, 15),
      type: 'payment',
      description: 'Last day for early bird pricing'
    },
    {
      id: '3',
      title: 'Final Registration',
      date: new Date(2024, 4, 30),
      type: 'deadline',
      description: 'Last day to register'
    },
    {
      id: '4',
      title: 'Event Day',
      date: new Date(2024, 5, 15),
      type: 'event',
      description: 'Race day!'
    }
  ]);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GanttItem | null>(null);
  const [showAllItems, setShowAllItems] = useState(true);
  const [newItem, setNewItem] = useState({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    type: 'deadline' as const,
    description: ''
  });

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getItemsForMonth = () => {
    return items.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= monthStart && itemDate <= monthEnd;
    });
  };

  const getItemColor = (type: GanttItem['type']) => {
    return ITEM_TYPES.find(t => t.value === type)?.color || 'bg-gray-500';
  };

  const addItem = () => {
    if (!newItem.title || !newItem.date) return;

    const item: GanttItem = {
      id: Date.now().toString(),
      title: newItem.title,
      date: new Date(newItem.date),
      type: newItem.type,
      description: newItem.description
    };

    setItems([...items, item]);
    setNewItem({ title: '', date: format(new Date(), 'yyyy-MM-dd'), type: 'deadline', description: '' });
    setIsAddDialogOpen(false);
  };

  const updateItem = (updatedItem: GanttItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    setEditingItem(null);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const ItemDialog = ({ item, isOpen, onClose }: { item?: GanttItem, isOpen: boolean, onClose: () => void }) => {
    const [formData, setFormData] = useState({
      title: item?.title || '',
      date: item ? format(item.date, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
      type: item?.type || 'deadline' as const,
      description: item?.description || ''
    });

    const handleSubmit = () => {
      if (!formData.title || !formData.date) return;

      if (item) {
        updateItem({
          ...item,
          title: formData.title,
          date: new Date(formData.date),
          type: formData.type,
          description: formData.description
        });
      } else {
        addItem();
      }
      onClose();
    };

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{item ? 'Edit' : 'Add'} Timeline Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter title..."
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={formData.type} onValueChange={(value: GanttItem['type']) => setFormData({ ...formData, type: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ITEM_TYPES.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${type.color}`} />
                        {type.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter description..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSubmit}>
                {item ? 'Update' : 'Add'} Item
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Timeline & Deadlines
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Manage important dates for {destinationName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showAllItems ? 'Hide Past' : 'Show All'}
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </DialogTrigger>
              <ItemDialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} />
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            ← Previous
          </Button>
          <h3 className="text-lg font-semibold">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            Next →
          </Button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
          {ITEM_TYPES.map(type => (
            <div key={type.value} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${type.color}`} />
              <span className="text-sm">{type.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline View */}
        <div className="space-y-4">
          {getItemsForMonth().length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No items scheduled for this month</p>
            </div>
          ) : (
            getItemsForMonth()
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-card border rounded-lg hover:shadow-sm transition-shadow">
                  <div className={`w-4 h-4 rounded-full ${getItemColor(item.type)} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium truncate">{item.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {ITEM_TYPES.find(t => t.value === item.type)?.label}
                      </Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-medium">{format(item.date, 'MMM dd')}</div>
                    <div className="text-xs text-muted-foreground">
                      {differenceInDays(item.date, new Date()) >= 0 
                        ? `${differenceInDays(item.date, new Date())} days left`
                        : `${Math.abs(differenceInDays(item.date, new Date()))} days ago`
                      }
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingItem(item)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* All Items List */}
        {showAllItems && (
          <div className="mt-8 pt-6 border-t">
            <h4 className="font-medium mb-4">All Timeline Items</h4>
            <div className="grid gap-2">
              {items
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map(item => (
                  <div key={item.id} className="flex items-center justify-between p-2 text-sm rounded hover:bg-muted/50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getItemColor(item.type)}`} />
                      <span>{item.title}</span>
                    </div>
                    <span className="text-muted-foreground">{format(item.date, 'MMM dd, yyyy')}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Edit Dialog */}
        {editingItem && (
          <ItemDialog
            item={editingItem}
            isOpen={!!editingItem}
            onClose={() => setEditingItem(null)}
          />
        )}
      </CardContent>
    </Card>
  );
};