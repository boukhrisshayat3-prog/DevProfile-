// Objetivo: Crear una interfaz de perfil profesional utilizando 3 componentes independientes que se comuniquen en una sola pantalla.
// Instrucciones para los alumnos:
// Componente 1: InfoBasica (Props)
// Debe recibir por props: nombre, especialidad y añosExperiencia.
// Usa Tailwind para darle un diseño de tarjeta profesional (bordes redondeados, sombras, tipografía elegante).

import React from 'react';

interface InfoBasicaProps {
  nombre: string;
  especialidad: string;
  añosExperiencia: number;
}

const InfoBasica: React.FC<InfoBasicaProps> = ({ nombre, especialidad, añosExperiencia }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{nombre}</h2>
      <p className="text-gray-700 mb-1">Especialidad: {especialidad}</p>
      <p className="text-gray-700">Años de Experiencia: {añosExperiencia}</p>
    </div>
  );

}

export default InfoBasica;