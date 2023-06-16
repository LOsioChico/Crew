import {
  useState,
  useEffect,
  type ChangeEvent,
  type MouseEventHandler,
} from 'react'

export const Search: React.FC = () => {
  interface ShowState {
    search: string
    category: string
    sort: string
  }

  const [ProjectName, setProjectName] = useState('')

  const handleCategoryFilter: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setShowState((state) => ({
      ...state,
      category: event.target.name,
    }))
  }

  const [showState, setShowState] = useState<ShowState>({
    search: '',
    category: 'All Proyects',
    sort: 'Trending',
  })

  useEffect(() => {
    console.log(showState) // Peticion a la API
  }, [showState])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    setProjectName(value)
  }

  const handleOnChange1 = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value
    setShowState((prevState) => ({
      ...prevState,
      sort: value,
    }))
  }

  return (
    <div className='flex flex-row'>
      <aside>
        <div className='mt-16 flex h-auto w-[240px] rounded-b-xl bg-primary pl-12 pt-6'>
          <ul className='last:mb-4'>
            <li>
              <h2 className='mb-2 font-bold text-white'> Categorías:</h2>
              <hr />
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                onClick={handleCategoryFilter}
                name='All Projects'
              >
                All Projects
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                onClick={handleCategoryFilter}
                name='Tech & Innovation'
              >
                Tech & Innovation
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                onClick={handleCategoryFilter}
                name='Creative Works'
              >
                Creative Works
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                onClick={handleCategoryFilter}
                name='Community Projects'
              >
                Community Projects
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className='block w-full items-center justify-center border border-black'>
        <div className='flex items-center justify-center'>
          <input
            type='text'
            value={ProjectName}
            onChange={handleInputChange}
            className='h-8 w-full rounded-md border-2 border-neutral-100 bg-neutral-100 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
            placeholder='Search for a project'
          />
          <button
            name='search'
            className='hover:bg-secondaryLight absolute right-0 flex h-8 items-center justify-center rounded-r-md bg-secondaryDark px-1 py-1 text-primary transition duration-300'
            onClick={() => {
              setShowState((prevState) => ({
                ...prevState,
                search: ProjectName,
              }))
            }}
          >
            <span className='material-symbols-outlined cursor-pointer'>
              search
            </span>
          </button>
        </div>
        <hr />
        <select
          className='broder-2 border-black'
          name='order'
          onChange={handleOnChange1}
          defaultValue='Trending'
        >
          <option value='' disabled>
            Seleccione una opción
          </option>
          <option value='Trending'>Trending</option>
          <option value='Most Founded'>Most Founded</option>
        </select>
        <div> Container</div>
      </div>
    </div>
  )
}
