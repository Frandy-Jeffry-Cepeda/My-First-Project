import { useNoteStore } from "../store";
import { Notes } from "../types"
import NoteDetailItem from "./NoteDetailItem"
import { toast } from "react-toastify";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';



type NoteDetailsProps = {
    notes: Notes
}

export default function NoteDetails({notes} : NoteDetailsProps) {

    const removeNote = useNoteStore(state => state.removeNote)
    const getNoteById = useNoteStore(state => state.getNoteById)

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => getNoteById(notes.id)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    );

    const handleOnClickErase = () => {
        removeNote(notes.id)
        toast.error("Nota eliminada")
    }
  
    
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={handleOnClickErase}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );

  return (
    <>
    <SwipeableList
    className="h-auto">
        <SwipeableListItem
            maxSwipe={1}
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
    >
            <div className="w-11/12 mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
                <NoteDetailItem label="Título" data={notes.tittle}/>
                <NoteDetailItem label="Descripción" data={notes.description}/>
                <NoteDetailItem label="Fecha" data={notes.date.toString()}/>
            </div>

        </SwipeableListItem>
    </SwipeableList>;
    </>
  )
}
