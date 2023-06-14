import { useState } from 'react'
// Función de filtrado del proyecto (simulada)
function filtrarProyectos(nombreProyecto: string): string[] {
  // Aquí debes implementar la lógica de filtrado real
  // y devolver un arreglo con los nombres de proyecto que coincidan
  // con el nombre de búsqueda.
  // Por simplicidad, vamos a devolver un arreglo de nombres ficticios.
  const proyectos = [
    'Proyecto 1',
    'Proyecto 2',
    'Proyecto 3',
    'Proyecto 4',
    'Proyecto 5',
    'Proyecto 6',
    'Proyecto 7',
    'Proyecto 8',
    'Proyecto 9',
    'Proyecto 10',
    'Proyecto 11',
    'Proyecto 12',
  ]

  return proyectos.filter((proyecto) =>
    proyecto.toLowerCase().includes(nombreProyecto.toLowerCase())
  )
}

// Componente principal
const BusquedaProyectos = (): any => {
  const [nombreProyecto, setNombreProyecto] = useState('')
  const [resultados, setResultados] = useState<string[]>([])

  const buscarProyectos = (): any => {
    const proyectosFiltrados = filtrarProyectos(nombreProyecto)
    setResultados(proyectosFiltrados.slice(0, 10))
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNombreProyecto(event.target.value)
  }
  return (
    <div>
      <input type='text' value={nombreProyecto} onChange={handleInputChange} />
      <button onClick={buscarProyectos}>Buscar</button>

      <ul>
        {resultados.map((proyecto, index) => (
          <li key={index}>{proyecto}</li>
        ))}
      </ul>
    </div>
  )
}

export default BusquedaProyectos
