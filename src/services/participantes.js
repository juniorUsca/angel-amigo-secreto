import supabase from '../libs/supabase'

export const guardarPerfil = async ({
  id,
  perfil, regalo1, regalo2, regalo3,
}) => {
  const { data, error } = await supabase
    .from('participantes')
    .upsert({
      id, perfil, regalo1, regalo2, regalo3,
    })
    .select()

  if (error) {
    throw new Error(error)
  }

  return data
}

export const buscarPerfil = async ({ codigo }) => {
  const { data, error } = await supabase
    .from('participantes')
    .select()
    .eq('codigo', codigo)

  console.log(data, error)

  if (error) {
    throw new Error(error)
  }
  if (data.length === 0) {
    throw new Error('El link es inválido, pide uno nuevo por favor')
  }
  if (data.length > 1) {
    throw new Error('Hay más de un participante con el mismo código, avísale a los organizadores')
  }

  return data[0]
}
