import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onArchive, onMoveToActive, active }) => {
    return (
        <div className="note-list">
          <h2 className={`note-list-title ${active ? 'active' : 'archived'}`}>
            {active ? 'Catatan' : 'Arsip Catatan'}
          </h2>
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                onMoveToActive={onMoveToActive}
                active={active}
              />
            ))
          ) : (
            <p> {active ? 'active' : 'archived'} Catatan Tersedia.</p>
          )}
        </div>
    );
  };
  
  export default NoteList;
