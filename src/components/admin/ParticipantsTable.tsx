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
  key: 'email_remaining_payment',
  label: 'Mail (remaining pay req.)'
}, {
  key: 'paid_remaining_balance',
  label: 'Fully Paid'
}, {
  key: 'race_ticket',
  label: 'Race ticket'
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
              <TableHead className="text-xs">Name</TableHead>
              <TableHead className="text-xs">Email</TableHead>
              <TableHead className="text-xs">Progress</TableHead>
              <TableHead className="text-xs">Quote Requested</TableHead>
              <TableHead className="text-xs">Quote Received</TableHead>
              <TableHead className="text-xs">Deposit paid</TableHead>
              <TableHead className="text-xs">Mail (deposit received)</TableHead>
              <TableHead className="text-xs">Info mail (flights, survey, insurance)</TableHead>
              <TableHead className="text-xs">Info mail (training)</TableHead>
              <TableHead className="text-xs">Mail (remaining pay req.)</TableHead>
              <TableHead className="text-xs">Fully Paid</TableHead>
              <TableHead className="text-xs">Race ticket</TableHead>
              <TableHead className="text-xs">Quick Actions</TableHead>
              <TableHead className="text-xs">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map(participant => <TableRow key={participant.id}>
                <TableCell className="font-medium">{participant.name}</TableCell>
                <TableCell>{participant.email}</TableCell>
                <TableCell>
                  {(() => {
                    const progress = getProgressPercentage(participant);
                    let bgColor = 'bg-red-500';
                    let textColor = 'text-white';
                    
                    if (progress === 100) {
                      bgColor = 'bg-green-500';
                    } else if (progress >= 75) {
                      bgColor = 'bg-green-400';
                    } else if (progress >= 50) {
                      bgColor = 'bg-yellow-500';
                      textColor = 'text-black';
                    } else if (progress >= 25) {
                      bgColor = 'bg-orange-500';
                    }
                    
                    return (
                      <div className="w-20 h-6 bg-muted rounded-full overflow-hidden relative">
                        <div 
                          className={`h-full transition-all ${bgColor}`}
                          style={{ width: `${progress}%` }}
                        />
                        <div className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${textColor}`}>
                          {progress}%
                        </div>
                      </div>
                    );
                  })()}
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