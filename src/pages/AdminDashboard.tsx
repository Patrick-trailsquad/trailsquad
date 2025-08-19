import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useParticipants } from '@/hooks/useParticipants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ParticipantsTable } from '@/components/admin/ParticipantsTable';
import { AddParticipantDialog } from '@/components/admin/AddParticipantDialog';
import { LogOut, Plus, Search, X } from 'lucide-react';

interface Trail {
  id: string;
  name: string;
}

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ribeira-sacra');
  const [trails, setTrails] = useState<Trail[]>([
    { id: 'ribeira-sacra', name: 'Ribeira Sacra' }
  ]);
  const [newTrailName, setNewTrailName] = useState('');
  const [isAddingTrail, setIsAddingTrail] = useState(false);

  // Get participants for the active trail
  const activeTrail = trails.find(t => t.id === activeTab);
  const { participants, loading, addParticipant, updateParticipant, deleteParticipant } = useParticipants(activeTrail?.name);

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTrail = () => {
    if (newTrailName.trim()) {
      const newTrail = {
        id: newTrailName.toLowerCase().replace(/\s+/g, '-'),
        name: newTrailName.trim()
      };
      setTrails(prev => [...prev, newTrail]);
      setActiveTab(newTrail.id);
      setNewTrailName('');
      setIsAddingTrail(false);
    }
  };

  const handleRemoveTrail = (trailId: string) => {
    if (trails.length > 1) {
      setTrails(prev => prev.filter(t => t.id !== trailId));
      if (activeTab === trailId) {
        setActiveTab(trails[0].id === trailId ? trails[1].id : trails[0].id);
      }
    }
  };

  const EmptyState = ({ trailName }: { trailName: string }) => (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
        <Plus className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No participants yet</h3>
      <p className="text-muted-foreground mb-4">
        Get started by adding your first participant to {trailName}.
      </p>
      <Button onClick={() => setIsAddDialogOpen(true)}>
        <Plus className="h-4 w-4 mr-2" />
        Add First Participant
      </Button>
    </div>
  );

  const TrailContent = ({ trail }: { trail: Trail }) => {
    const { participants: trailParticipants, loading: trailLoading, addParticipant: addTrailParticipant, updateParticipant: updateTrailParticipant, deleteParticipant: deleteTrailParticipant } = useParticipants(trail.name);
    
    const filteredTrailParticipants = trailParticipants.filter(participant =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{trailParticipants.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Requested Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trailParticipants.filter(p => p.requested_quote).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Paid Deposits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trailParticipants.filter(p => p.paid_deposit).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Fully Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trailParticipants.filter(p => p.paid_remaining_balance).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        {trailParticipants.length === 0 && !trailLoading ? (
          <EmptyState trailName={trail.name} />
        ) : (
          <ParticipantsTable
            participants={filteredTrailParticipants}
            loading={trailLoading}
            onUpdate={updateTrailParticipant}
            onDelete={deleteTrailParticipant}
          />
        )}

        {/* Add Participant Dialog for this trail */}
        <AddParticipantDialog
          open={isAddDialogOpen && activeTab === trail.id}
          onOpenChange={setIsAddDialogOpen}
          onAdd={addTrailParticipant}
          trail={trail.name}
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
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-auto grid-cols-auto">
              {trails.map((trail) => (
                <div key={trail.id} className="flex items-center">
                  <TabsTrigger 
                    value={trail.id} 
                    className="flex items-center gap-2"
                  >
                    {trail.name}
                    {trails.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTrail(trail.id);
                        }}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </TabsTrigger>
                </div>
              ))}
              {isAddingTrail ? (
                <div className="flex items-center gap-2 px-3">
                  <Input
                    placeholder="Trail name..."
                    value={newTrailName}
                    onChange={(e) => setNewTrailName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddTrail();
                      if (e.key === 'Escape') {
                        setIsAddingTrail(false);
                        setNewTrailName('');
                      }
                    }}
                    className="h-8 w-32"
                    autoFocus
                  />
                  <Button size="sm" onClick={handleAddTrail}>Add</Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsAddingTrail(true)}
                  className="text-muted-foreground"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Trail
                </Button>
              )}
            </TabsList>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search participants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Participant
            </Button>
          </div>

          {/* Tab Content */}
          {trails.map((trail) => (
            <TabsContent key={trail.id} value={trail.id}>
              <TrailContent trail={trail} />
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;