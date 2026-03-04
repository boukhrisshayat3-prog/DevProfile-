import { useState } from "react"

const EstadoSuscripcion = () => {

  // ESTADO BOOLEANO PARA DEFINIR SI EL USUARIO ES PREMIUM O GRATUITO
  const [isPremium, setIsPremium] = useState(false)

  return (
    <div className="p-8 max-w-md w-full bg-white rounded-lg shadow-2xl space-y-4 text-center">

      <h1 className="text-2xl font-bold">
        Estado de Suscripción
      </h1>

      {/* SI ES PREMIUM MOSTRAMOS BANNER DORADO */}
      {isPremium && (
        <div className="p-4 rounded-lg bg-yellow-400 text-yellow-900 font-bold flex items-center justify-center gap-2 shadow-lg">
          <span className="text-xl">👑</span>
          Cuenta Pro Activa
        </div>
      )}

      {/* SI ES GRATUITO MOSTRAMOS BANNER GRIS CON BOTON */}
      {!isPremium && (
        <div className="p-4 rounded-lg bg-gray-300 text-gray-800 space-y-3">
          <p className="font-semibold">
            Actualiza a Pro
          </p>

          <button
            onClick={() => setIsPremium(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Cambiar a Premium
          </button>
        </div>
      )}

      {/* BOTON OPCIONAL PARA VOLVER A GRATUITO */}
      {isPremium && (
        <button
          onClick={() => setIsPremium(false)}
          className="mt-3 text-sm text-gray-600 underline"
        >
          Volver a Gratuito
        </button>
      )}

    </div>
  )
}

export default EstadoSuscripcion
