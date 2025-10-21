import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useParticipants } from '@/hooks/useParticipants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ParticipantsTable } from '@/components/admin/ParticipantsTable';
import { AddParticipantDialog } from '@/components/admin/AddParticipantDialog';
import { GanttChart } from '@/components/admin/GanttChart';
import { ImageOptimizer } from '@/components/admin/ImageOptimizer';
import { LogOut, Plus, Users, Image } from 'lucide-react';
import { DESTINATIONS, type Destination } from '@/config/destinations';

// Fixed Search reference error
const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(() => {
    // Find the next upcoming trip (priority: open > upcoming > others)
    const upcomingTrip = DESTINATIONS.find(d => d.status === 'open') || 
                        DESTINATIONS.find(d => d.status === 'upcoming') ||
                        DESTINATIONS[0];
    return upcomingTrip?.id || 'gtc';
  });

  // Get participants for the active destination
  const activeDestination = DESTINATIONS.find(d => d.id === activeTab);
  const { participants, loading, addParticipant, updateParticipant, deleteParticipant } = useParticipants(activeDestination?.name);

  const getStatusColor = (status: Destination['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'open':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'closed':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const ParticipantCounter = ({ destinationName }: { destinationName: string }) => {
    const { participants } = useParticipants(destinationName);
    return (
      <Badge variant="secondary" className="ml-2">
        <Users className="h-3 w-3 mr-1" />
        {participants.length}
      </Badge>
    );
  };

  const EmptyState = ({ destinationName }: { destinationName: string }) => (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
        <Plus className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No participants yet</h3>
      <p className="text-muted-foreground mb-4">
        Get started by adding your first participant to {destinationName}.
      </p>
      <Button onClick={() => setIsAddDialogOpen(true)}>
        <Plus className="h-4 w-4 mr-2" />
        Add First Participant
      </Button>
    </div>
  );

  const DestinationContent = ({ destination }: { destination: Destination }) => {
    const { participants: destinationParticipants, loading: destinationLoading, addParticipant: addDestinationParticipant, updateParticipant: updateDestinationParticipant, deleteParticipant: deleteDestinationParticipant } = useParticipants(destination.name);

    return (
      <div className="space-y-6">
        {/* Content */}
        {destinationParticipants.length === 0 && !destinationLoading ? (
          <EmptyState destinationName={destination.name} />
        ) : (
          <ParticipantsTable
            participants={destinationParticipants}
            loading={destinationLoading}
            onUpdate={updateDestinationParticipant}
            onDelete={deleteDestinationParticipant}
          />
        )}

        {/* Gantt Chart */}
        <GanttChart destinationName={destination.name} />

        {/* Add Participant Dialog for this destination */}
        <AddParticipantDialog
          open={isAddDialogOpen && activeTab === destination.id}
          onOpenChange={setIsAddDialogOpen}
          onAdd={addDestinationParticipant}
          trail={destination.name}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Trail Squad Admin</h1>
            <p className="text-muted-foreground">Participant Management Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Participant
            </Button>
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {DESTINATIONS.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => setActiveTab(destination.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === destination.id
                      ? 'bg-yellow-400 text-yellow-900 shadow-lg shadow-yellow-400/25 scale-105 font-semibold'
                      : 'bg-card hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 hover:shadow-sm'
                  }`}
                >
                  <span className="font-medium">{destination.name}</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(destination.status)}`}
                  >
                    {destination.status}
                  </Badge>
                  <ParticipantCounter destinationName={destination.name} />
                </button>
              ))}
              <button
                onClick={() => setActiveTab('image-optimizer')}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'image-optimizer'
                    ? 'bg-yellow-400 text-yellow-900 shadow-lg shadow-yellow-400/25 scale-105 font-semibold'
                    : 'bg-card hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 hover:shadow-sm'
                }`}
              >
                <Image className="h-4 w-4" />
                <span className="font-medium">Image Optimizer</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {DESTINATIONS.map((destination) => (
            <TabsContent key={destination.id} value={destination.id}>
              <DestinationContent destination={destination} />
            </TabsContent>
          ))}
          
          {/* Image Optimizer Tab */}
          <TabsContent value="image-optimizer">
            <ImageOptimizer />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;