'use client';

import { useNotes } from '@/features/notes/hooks/use-notes';

export default function NoteDetailPage() {
  const { data: notes, isLoading } = useNotes();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Note Detail</h1>
      <p className="text-muted-foreground mb-6">Detailed view of a single note.</p>
      
      <div className="grid gap-4">
        {notes?.map((note: any) => (
          <div key={note.id} className="border rounded p-4">
            <pre>{JSON.stringify(note, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
