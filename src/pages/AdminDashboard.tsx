import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useParticipants } from '@/hooks/useParticipants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ParticipantsTable } from '@/components/admin/ParticipantsTable';
import { AddParticipantDialog } from '@/components/admin/AddParticipantDialog';
import { LogOut, Plus, Search } from 'lucide-react';

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const { participants, loading, addParticipant, updateParticipant, deleteParticipant } = useParticipants();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{participants.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Requested Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {participants.filter(p => p.requested_quote).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Paid Deposits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {participants.filter(p => p.paid_deposit).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Fully Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {participants.filter(p => p.paid_remaining_balance).length}
              </div>
            </CardContent>
          </Card>
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

        {/* Participants Table */}
        <ParticipantsTable
          participants={filteredParticipants}
          loading={loading}
          onUpdate={updateParticipant}
          onDelete={deleteParticipant}
        />

        {/* Add Participant Dialog */}
        <AddParticipantDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAdd={addParticipant}
        />
      </main>
    </div>
  );
};

export default AdminDashboard;