import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Notes, DraftNotes } from "./types";
import { v4 as uuidv4 } from 'uuid';

type NotesState = {
  pageStatus: boolean
  notes: Notes[]
  activeId: Notes['id']
  changeStatusPage: () => void
  addNote: (data: DraftNotes) => void
  removeNote: (id: Notes['id']) => void
  getNoteById: (id: Notes['id']) => void
  updateNote: (data: DraftNotes) => void
  resetApp: () => void
};

const createNewNote = (note: DraftNotes) : Notes => {
  return {...note,id: uuidv4()}
}

export const useNoteStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        pageStatus: false,
        changeStatusPage: () =>
          set((state) => ({pageStatus: !state.pageStatus,})),
        notes: [],
        addNote: (data) => {
          const newNote = createNewNote(data);
          set((state) => ({
            notes: [...state.notes, newNote],
          }));
        },
        removeNote: (id) => {
          set((state) => ({
            notes: state.notes.filter(notes => notes.id !== id)
          }))
        },
        activeId: '',
        getNoteById: (id) => {
          set(() => ({
            activeId: id
          }))
        },
        updateNote: (data) => {
          set((state) => ({
            notes: state.notes.map(note => note.id === state.activeId ? {id: state.activeId, ...data} : note),
            activeId: ''
          }))
        },
        resetApp: () => {
          set(() => ({
            notes: [],
            pageStatus: false
          }))
        }
      }),
      {
        name: "note-storage", 
      }
    )
  )
);
