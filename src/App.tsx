import Home from "./components/Home";
import { useNoteStore } from "./store";

function App() {

  const pageStatus = useNoteStore((state => state.pageStatus))
  const changeStatusPage = useNoteStore((state => state.changeStatusPage))

  return (
    <>
    {!pageStatus ? (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl py-5 text-center">
            Bienvenido a tu App favorita para crear notas
          </h1>
        </div>

        <div className="flex items-center justify-center mt-8 w-full">
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-xl text-white font-bold text-2xl transition-colors"
          onClick={changeStatusPage}
          >
            Crear Notas
          </button>
        </div>
      </div>
    ) : (
      <>
      <div>
        <Home/>
      </div>
      </>
    )}
    </>
  );
}

export default App;
