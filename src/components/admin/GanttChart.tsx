import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { format, startOfMonth, endOfMonth, addMonths, subMonths, eachWeekOfInterval, startOfWeek, endOfWeek, differenceInDays, isWithinInterval, addDays, isToday } from 'date-fns';
import { useTimelineItems, type TimelineItem } from '@/hooks/useTimelineItems';

interface GanttChartProps {
  destinationName: string;
}

const ITEM_TYPES = [
  { value: 'registration', label: 'Flybilletter', color: 'bg-emerald-500', lightColor: 'bg-emerald-100', textColor: 'text-emerald-900' },
  { value: 'payment', label: 'Hotelværelser', color: 'bg-amber-500', lightColor: 'bg-amber-100', textColor: 'text-amber-900' },
  { value: 'event', label: 'Race billetter', color: 'bg-blue-500', lightColor: 'bg-blue-100', textColor: 'text-blue-900' },
  { value: 'deadline', label: 'Airport shuttle', color: 'bg-red-500', lightColor: 'bg-red-100', textColor: 'text-red-900' },
  { value: 'milestone', label: 'Deltagerinfo', color: 'bg-purple-500', lightColor: 'bg-purple-100', textColor: 'text-purple-900' },
];

export const GanttChart: React.FC<GanttChartProps> = ({ destinationName }) => {
  console.log('GanttChart rendered with destinationName:', destinationName);
  
  const { items, loading, addItem, updateItem, deleteItem } = useTimelineItems(destinationName);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TimelineItem | null>(null);
  const [newItem, setNewItem] = useState({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    type: 'deadline' as const,
    description: ''
  });

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const weeks = eachWeekOfInterval({ start: monthStart, end: monthEnd }, { weekStartsOn: 1 });

  const getItemsByType = () => {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {} as Record<TimelineItem['type'], TimelineItem[]>);
    
    return grouped;
  };

  const getItemColor = (type: TimelineItem['type']) => {
    return ITEM_TYPES.find(t => t.value === type) || ITEM_TYPES[0];
  };

  const calculateBarPosition = (date: Date) => {
    const dayOfMonth = date.getDate();
    const totalDaysInMonth = endOfMonth(currentMonth).getDate();
    return (dayOfMonth / totalDaysInMonth) * 100;
  };

  const getTodayPosition = () => {
    const today = new Date();
    if (!isWithinInterval(today, { start: monthStart, end: monthEnd })) {
      return null; // Today is not in the current month
    }
    return calculateBarPosition(today);
  };

  const todayPosition = getTodayPosition();

  const isItemInCurrentMonth = (item: TimelineItem) => {
    return isWithinInterval(item.date, { start: monthStart, end: monthEnd });
  };

  const handleAddItem = async () => {
    if (!newItem.title || !newItem.date) return;

    await addItem({
      destination: destinationName,
      title: newItem.title,
      date: new Date(newItem.date),
      type: newItem.type,
      description: newItem.description
    });

    setNewItem({ title: '', date: format(new Date(), 'yyyy-MM-dd'), type: 'deadline', description: '' });
    setIsAddDialogOpen(false);
  };

  const handleUpdateItem = async (updatedItem: TimelineItem) => {
    await updateItem(updatedItem.id, {
      title: updatedItem.title,
      date: updatedItem.date,
      type: updatedItem.type,
      description: updatedItem.description
    });
    setEditingItem(null);
  };

  const handleDeleteItem = async (id: string) => {
    await deleteItem(id);
  };

  const ItemDialog = ({ item, isOpen, onClose }: { item?: TimelineItem, isOpen: boolean, onClose: () => void }) => {
    const [formData, setFormData] = useState({
      title: item?.title || '',
      date: item ? format(item.date, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
      type: item?.type || 'deadline' as const,
      description: item?.description || ''
    });

    const handleSubmit = async () => {
      if (!formData.title || !formData.date) return;

      if (item) {
        await handleUpdateItem({
          ...item,
          title: formData.title,
          date: new Date(formData.date),
          type: formData.type,
          description: formData.description
        });
      } else {
        await handleAddItem();
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
              <Select value={formData.type} onValueChange={(value: TimelineItem['type']) => setFormData({ ...formData, type: value })}>
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

  if (loading) {
    return (
      <Card className="mt-6">
        <CardContent className="p-8">
          <div className="text-center">
            <Loader2 className="h-8 w-8 mx-auto mb-2 animate-spin" />
            <p className="text-muted-foreground">Loading timeline...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const groupedItems = getItemsByType();

  return (
    <TooltipProvider>
      <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Timeline & Deadlines
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Visual timeline for {destinationName}
            </p>
          </div>
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
      </CardHeader>
      <CardContent>
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-xl font-bold uppercase tracking-wider">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Gantt Chart */}
        <div className="space-y-1">
          {/* Header with weeks */}
          <div className="grid grid-cols-12 gap-1 mb-4">
            <div className="col-span-3"></div>
            {weeks.map((week, index) => (
              <div key={week.toISOString()} className="col-span-2 text-center">
                <div className={`py-2 px-3 rounded-lg font-semibold text-sm ${
                  index === 0 ? 'bg-yellow-200 text-yellow-900 border-2 border-yellow-400' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  WEEK {index + 1}
                </div>
              </div>
            ))}
            <div className="col-span-1"></div>
          </div>

          {/* Timeline Rows */}
          {ITEM_TYPES.map(typeConfig => {
            const typeItems = groupedItems[typeConfig.value] || [];
            const currentMonthItems = typeItems.filter(isItemInCurrentMonth);
            
            if (typeItems.length === 0) return null;

            return (
              <div key={typeConfig.value} className="grid grid-cols-12 gap-1 mb-3 min-h-[80px]">
                {/* Left sidebar with items */}
                <div className={`col-span-3 ${typeConfig.lightColor} rounded-lg p-4 space-y-2`}>
                  <div className="flex items-center justify-between">
                    <h4 className={`font-semibold text-sm ${typeConfig.textColor}`}>
                      {typeConfig.label}
                    </h4>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 opacity-60 hover:opacity-100"
                        onClick={() => setIsAddDialogOpen(true)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                   <div className="space-y-1">
                     {typeItems.map(item => (
                       <div key={item.id} className="group">
                         <div className={`text-xs ${typeConfig.textColor} space-y-1`}>
                           {item.description && (
                             <Tooltip>
                               <TooltipTrigger asChild>
                                 <div className="text-xs opacity-75 group-hover:opacity-100 transition-opacity cursor-help">
                                   {item.description}
                                 </div>
                               </TooltipTrigger>
                               <TooltipContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg z-50">
                                 <p className="max-w-xs text-sm whitespace-pre-wrap">{item.description}</p>
                               </TooltipContent>
                             </Tooltip>
                           )}
                           <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Button
                               variant="ghost"
                               size="sm"
                               className="h-6 w-6 p-0"
                               onClick={() => setEditingItem(item)}
                             >
                               <Edit2 className="h-3 w-3" />
                             </Button>
                             <Button
                               variant="ghost"
                               size="sm"
                               className="h-6 w-6 p-0"
                               onClick={() => handleDeleteItem(item.id)}
                             >
                               <Trash2 className="h-3 w-3" />
                             </Button>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Timeline bars */}
                <div className="col-span-8 relative py-4">
                  {/* Today indicator line */}
                  {todayPosition !== null && (
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 opacity-80"
                      style={{ left: `${Math.max(0, Math.min(todayPosition, 95))}%` }}
                    >
                    </div>
                  )}
                  
                  {currentMonthItems.map(item => {
                    const position = calculateBarPosition(item.date);
                    return (
                      <div
                        key={item.id}
                        className={`absolute h-8 ${typeConfig.color} rounded-full flex items-center justify-center text-white text-xs font-medium shadow-sm mb-1`}
                        style={{
                          left: `${Math.max(0, Math.min(position, 85))}%`,
                          width: '80px',
                          top: `${currentMonthItems.indexOf(item) * 36}px`
                        }}
                        title={`${item.title} - ${format(item.date, 'MMM dd')}`}
                      >
                        <span className="truncate px-2">
                          {format(item.date, 'dd/MM')}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-1"></div>
              </div>
            );
          })}

          {Object.keys(groupedItems).length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No timeline items yet</h3>
              <p className="mb-4">Create your first timeline item to get started</p>
              <Button onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Timeline Item
              </Button>
            </div>
          )}
        </div>

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
    </TooltipProvider>
  );
};