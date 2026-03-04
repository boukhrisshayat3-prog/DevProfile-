// Crea un estado llamado puntos.
// Debe tener dos botones: "Aprender tecnología" (+1) y "Olvidar tecnología" (-1).
// El diseño debe resaltar el número de puntos con un color llamativo.

import { useState } from "react";

const ContadorSkills = () => {

  const [counter, setCounter] = useState(0)
  return (
    <div className="max-w-sm mx-auto bg-green-100 rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
    <p className="text-3xl font-bold text-blue-800">{counter}</p>
    <button
      className={`w-full rounded ${counter > 0 ? 'bg-green-500 text-red-500 px-4 py-2 font-bold uppercase' : 'bg-blue-100 text-gray-300 px-4 py-2'}`}
      onClick={() => setCounter(counter + 1)}>
            Aprender tecnologia
        </button>
    <button
      className={`w-full rounded ${counter > 0 ? 'bg-blue-100 text-gray-300 px-4 py-2 ' : 'bg-green-500 text-red-500 font-bold px-4 py-2 uppercase'} `}
      onClick={() => setCounter(counter - 1)}
    >
            Olvidar tecnologia
        </button>

    </div>
  )
}

export default ContadorSkills