import { buscarPerfil, listaParticipantes } from '../../../../services/participantes'
import Result from './result'

export const revalidate = 0

export default async function PerfilPage ({
  params,
}) {
  const { userId } = params

  const perfil = await buscarPerfil({ codigo: userId })
  const lista = await listaParticipantes()

  console.log(perfil, lista)

  return (
    <Result
      participantes={lista}
      angel={perfil.angel}
    />
  )
}
