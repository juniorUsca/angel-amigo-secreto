import obtenerJuego from 'services/juego'
import { buscarPerfil } from '../../../services/participantes'
import FormPerfil from './form'

export const revalidate = 0

export default async function PerfilPage ({
  params,
}) {
  const { userId } = params

  const perfil = await buscarPerfil({ codigo: userId })
  const juego = await obtenerJuego()

  return (
    <FormPerfil
      id={perfil.id}
      nombre={perfil.nombre}
      regalo1={perfil.regalo1}
      regalo2={perfil.regalo2}
      regalo3={perfil.regalo3}
      perfil={perfil.perfil}
      angel={juego.mostrar_angel ? perfil.angel : null}
      mostrarAngel={juego.mostrar_angel}
      codigo={userId}
    />
  )
}
