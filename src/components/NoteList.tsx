import { useNoteStore } from "../store"
import NoteDetails from "./NoteDetails"

export default function NoteList() {

    const notes = useNoteStore(state=> state.notes)

  return (
    <div className="md:w-1/2 lg:1/5 md:h-screen overflow-y-scroll">
        {notes.length ? (
            <>
            <h2 className="font-black text-3xl text-center text-white">Listado de Notas</h2>
            <p className="text-xl mt-5 mb-10 text-center text-white">
                Administra tus {''}
                <span className="text-indigo-600 font-bol">Notas</span>
            </p>
            {notes.map(notes => (
                <NoteDetails
                    key={notes.id}
                    notes={notes}
                />
            ))}
            </>
        ): (
            <>
            <h2 className="font-black text-3xl text-center text-white">No hay notas</h2>
            <p className="text-xl mt-5 mb-10 text-center text-white mx-5">
                Comienza agregando notas {''}
                <span className=" font-bold text-white">y aparecerán en este lugar</span>
            </p>
            </>
        )}
    </div>
  )
}
