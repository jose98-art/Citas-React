import { useState, useEffect } from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState('');

  return (
    <div className="md:w-1/2 lg:w-2/5" >
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className=" text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administrarlos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 font-bold">Nombre mascota</label>
                <input id="mascota" type="text"
                 placeholder="Nombre de la mascota"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 font-bold">Nombre Propietario</label>
                <input id="propietario" type="text"
                 placeholder="Nombre del propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                <input id="email" type="email"
                 placeholder="Email contacto propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 font-bold">Alta</label>
                <input id="alta" type="date"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 font-bold">Sintomas</label>
               <textarea 
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
               id="sintomas" 
               placeholder="Describe los sintomas de tu mascota"></textarea>
            </div>
            <input
             type="submit" 
             className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
             value="Agregar paciente"

             />
        </form>
    </div>
  )
}

export default Formulario
