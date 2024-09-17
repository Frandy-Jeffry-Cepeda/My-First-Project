import { useForm } from "react-hook-form"
import { DraftNotes } from "../types"
import ErrorMessage from "./ErrorMessage"
import { useNoteStore } from "../store"
import {toast } from 'react-toastify';
import { useEffect } from "react";


export default function Form() {

    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftNotes>()

    const notes = useNoteStore(state => state.notes)
    const addNotes = useNoteStore(state => state.addNote)
    const activeId = useNoteStore(state => state.activeId)
    const updateNotes = useNoteStore(state => state.updateNote)

    useEffect(() => {
        if(activeId) {
            const activeNotes = notes.filter(notes => notes.id === activeId)[0]
            setValue('tittle', activeNotes.tittle)
            setValue('description', activeNotes.description)
            setValue('date', activeNotes.date)
        }
    },[activeId])

    const NotesRegister = (data: DraftNotes) => {

        if(activeId) {
            updateNotes(data)
            toast.success('Nota Editada Correctamente.')
        } else {
            addNotes(data)
            toast.success('Nota Registrada Correctamente.')
        }

        reset()
    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

    <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(NotesRegister)}
        >
        <div className="mb-5">
            <label htmlFor="tittle" className="text-sm uppercase font-bold">
                Título
            </label>
            <input type="text" 
            id= "tittle"
            className='w-full p-3  border border-gray-100'
            placeholder='Introduce el título'
            {...register('tittle', {
                required: "El titulo es obligatorio"
            })}
            />

            {errors.tittle && (
                <ErrorMessage>{errors.tittle.message}</ErrorMessage>
            )}
            
        </div>

        <div className="mb-5">
            <label htmlFor="description" className="text-sm uppercase font-bold">
                Descripción
            </label>
            <textarea 
            id="description"
            className="w-full p-3  border border-gray-100"
            placeholder="Introduce una introducción"
            {...register("description", {
                required: "La descripción es obligatoria"
            })}
            />
            {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
        </div>

        <div className="mb-5">
            <label htmlFor="date" className="text-sm uppercase font-bold">
                Fecha
            </label>
            <input type="date" 
            id= "date"
            className='w-full p-3  border border-gray-100'
            placeholder='Introduce el título'
            {...register("date", {
                required: "La fecha es obligatoria"
            })}
            />
            {errors.date && (
                <ErrorMessage>{errors.date.message}</ErrorMessage>
            )}
        </div>

        <div className="mb-5">
            <input type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"           
                value= "Guardar Nota"
            />
        </div>

    </form>
    </div>
  )
}
