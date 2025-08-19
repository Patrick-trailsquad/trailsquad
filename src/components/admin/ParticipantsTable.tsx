import React, { useState } from 'react';
import { Participant } from '@/hooks/useParticipants';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { EditParticipantDialog } from '@/components/admin/EditParticipantDialog';
import { Trash2, Edit, Loader2, CheckSquare } from 'lucide-react';
interface ParticipantsTableProps {
  participants: Participant[];
  loading: boolean;
  onUpdate: (id: string, updates: Partial<Participant>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}
const journeySteps = [{
  key: 'requested_quote',
  label: 'Quote Requested'
}, {
  key: 'received_quote',
  label: 'Quote Received'
}, {
  key: 'paid_deposit',
  label: 'Deposit Paid'
}, {
  key: 'email_1_sent',
  label: 'Email 1'
}, {
  key: 'email_2_sent',
  label: 'Email 2'
}, {
  key: 'email_3_sent',
  label: 'Email 3'
}, {
  key: 'paid_remaining_balance',
  label: 'Fully Paid'
}];
export const ParticipantsTable: React.FC<ParticipantsTableProps> = ({
  participants,
  loading,
  onUpdate,
  onDelete
}) => {
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);
  const handleStepToggle = async (participant: Participant, step: string, checked: boolean) => {
    await onUpdate(participant.id, {
      [step]: checked
    });
  };
  const handleCheckAll = async (participant: Participant) => {
    const updates: Partial<Participant> = {};
    journeySteps.forEach(step => {
      (updates as any)[step.key] = true;
    });
    await onUpdate(participant.id, updates);
  };
  const getProgressPercentage = (participant: Participant) => {
    const completedSteps = journeySteps.filter(step => participant[step.key as keyof Participant]).length;
    return Math.round(completedSteps / journeySteps.length * 100);
  };
  if (loading) {
    return <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading participants...</span>
      </div>;
  }
  if (participants.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">
        No participants found. Add your first participant to get started.
      </div>;
  }
  return <>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Quote Requested</TableHead>
              <TableHead>Quote Received</TableHead>
              <TableHead>Deposit paid</TableHead>
              <TableHead>Mail (deposit received)</TableHead>
              <TableHead>Info mail (flights, survey, insurance)</TableHead>
              <TableHead>Info mail (training)</TableHead>
              <TableHead>Fully Paid</TableHead>
              <TableHead>Quick Actions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map(participant => <TableRow key={participant.id}>
                <TableCell className="font-medium">{participant.name}</TableCell>
                <TableCell>{participant.email}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all" style={{
                    width: `${getProgressPercentage(participant)}%`
                  }} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {getProgressPercentage(participant)}%
                    </Badge>
                  </div>
                </TableCell>
                
                {journeySteps.map(step => <TableCell key={step.key}>
                    <Checkbox checked={participant[step.key as keyof Participant] as boolean} onCheckedChange={checked => handleStepToggle(participant, step.key, checked as boolean)} />
                  </TableCell>)}
                
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => handleCheckAll(participant)} className="text-xs">
                    <CheckSquare className="h-3 w-3 mr-1" />
                    All
                  </Button>
                </TableCell>
                
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setEditingParticipant(participant)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Participant</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {participant.name}? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => onDelete(participant.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>

      <EditParticipantDialog participant={editingParticipant} open={!!editingParticipant} onOpenChange={open => !open && setEditingParticipant(null)} onUpdate={onUpdate} />
    </>;
};