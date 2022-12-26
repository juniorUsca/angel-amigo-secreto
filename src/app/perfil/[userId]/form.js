'use client'

import { guardarPerfil } from '../../../services/participantes'

export default function FormPerfil ({
  id,
  nombre, regalo1, regalo2, regalo3, perfil,
}) {
  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())

    console.log(value)

    try {
      await guardarPerfil({
        id,
        ...value,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="grid place-items-center h-screen text-center">
      <div className="w-full p-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-700">
          Hola
          {' '}
          <span className="text-indigo-500">{nombre}</span>
          , esta página es solo para tí, no lo compartas con nadie 🤐
        </h1>
        <div className="mt-4">
          <p>
            Para conocernos mejor entre todos primero llena algunos de tus datos
          </p>

          <form className="mt-8 text-left" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="perfil"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Escribe un poco sobre ti, tus gustos, tus hobbies, tus pasatiempos, en que comunidad estas...
              </label>
              <textarea
                id="perfil"
                name="perfil"
                rows="8"
                // eslint-disable-next-line max-len
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                defaultValue={perfil}
              />
            </div>
            <h2 className="mt-8 text-2xl font-bold text-center">
              ¿Qué te gustaría recibir como regalo?
            </h2>
            <p className="mt-4 text-center text-gray-500">
              Escribe tres opciones de regalo que te gustaría recibir
              <br />
              Mientras más específico seas, más fácil será que te regalen algo que te guste
              <br />
              Recuerda que el precio del regalo puede ser entre los S/.20 y S/.40 soles aprox.
            </p>
            <div className="mt-4">
              <label
                htmlFor="primer_opcion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primera opción de regalo
              </label>
              <input
                type="text"
                id="primer_opcion"
                name="regalo1"
                // eslint-disable-next-line max-len
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej. Un libro"
                required
                defaultValue={regalo1}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="segunda_opcion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Segunda opción de regalo
              </label>
              <input
                type="text"
                id="segunda_opcion"
                name="regalo2"
                // eslint-disable-next-line max-len
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej. Una camiseta"
                required
                defaultValue={regalo2}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="tercera_opcion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tercera opción de regalo
              </label>
              <input
                type="text"
                id="tercera_opcion"
                name="regalo3"
                // eslint-disable-next-line max-len
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ej. Un juego de mesa"
                required
                defaultValue={regalo3}
              />
            </div>
            <p className="mt-8 text-center text-gray-500">
              El sorteo se realizará el lunes 26 de diciembre a las 7:00pm
              <br />
              Recarga esta página a esa hora para ver de quién eres el angel secreto.
              <br />
              Recuerda no compartir esta página con nadie,
              <br />
              para qué sea un secreto hasta el último momento. 🤫
            </p>
            <div className="mt-8 text-center">
              <button
                type="submit"
                // eslint-disable-next-line max-len
                className="bg-indigo-600 text-white text-sm font-medium rounded-lg p-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 max-w-full w-96"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
