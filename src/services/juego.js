import supabase from '../libs/supabase'

export const obtenerJuego = async () => {
  const { data, error } = await supabase
    .from('juego')
    .select(`
      id,
      mostrar_angel
    `)
    .eq('activo', true)

  console.log(data, error)

  if (error) {
    throw new Error(error)
  }
  if (data.length === 0) {
    throw new Error('No hay juego activo, avísale a los organizadores')
  }
  if (data.length > 1) {
    throw new Error('Hay más de un juego activo, avísale a los organizadores')
  }

  return data[0]
}

export default obtenerJuego
