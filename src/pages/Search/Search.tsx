import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoriesContainer } from './components/CategoriesContainer'
import { useSearch } from './hooks'
import { type ShowState } from './interface'
import { URLParams } from './utils'
import { handleSortSelect } from './utils/filtersHandler'

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [showState, setShowState] = useState<ShowState>({
    category: 'All Projects',
    sort: 'Trending',
  })
  const navigate = useNavigate()
  const params = URLParams({ search, showState })
  useSearch({ params })

  useEffect(() => {
    navigate('/search?' + params.toString())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  return (
    <div className='flex flex-row'>
      <CategoriesContainer setShowState={setShowState} />
      <div className='block w-full items-center justify-center border border-black'>
        <div className='flex items-center justify-center'>
          <input
            type='text'
            name='search'
            className='h-8 w-full rounded-md border-2 border-neutral-100 bg-neutral-100 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
            placeholder='Search for a project'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setShowState((prevState) => ({
                  ...prevState,
                  search,
                }))
              }
            }}
          />
          <button
            name='search'
            className='hover:bg-secondaryLight absolute right-0 flex h-8 items-center justify-center rounded-r-md bg-secondaryDark px-1 py-1 text-primary transition duration-300'
            onClick={() => {
              setShowState((prevState) => ({
                ...prevState,
                search,
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
          onChange={(event) => {
            handleSortSelect({ event, setShowState })
          }}
          defaultValue='Trending'
        >
          <option value='' disabled>
            Seleccione una opción
          </option>
          <option value='Trending'>Trending</option>
          <option value='Most Founded'>Most Founded</option>
        </select>
        <div>Container</div>
      </div>
    </div>
  )
}
