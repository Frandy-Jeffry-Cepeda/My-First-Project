import { useNoteStore } from "../store";
import Form from "./Form";
import NoteList from "./NoteList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const restartApp = useNoteStore(state => state.resetApp)


  return (
    <>


    <div className="container mx-auto mt-20">
      
      <header className="flex justify-between py-10 px-4">
          <h1 className="text-white font-bold text-4xl py-1">Crea tus <span className="text-indigo-600 py-1">Notas</span> con facilidad</h1>
          <button className=" bg-red-500 p-3 text-white uppercase font-bold hover:bg-red-600 cursor-pointer transition-colors rounded-lg"
          onClick={restartApp}
          >Resetear App
          </button>
      </header>
    

      <main>
        <div className="mt-12 md:flex">
          <Form/>
          <NoteList/>
        </div>
      </main>
      <ToastContainer/>
      
    </div>
    </>

  )
}
