import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoriesContainer } from './components/CategoriesContainer'
import { useSearch } from './hooks'
import { type ShowState } from './interface'
import { URLParams } from './utils'
import { handleSortSelect } from './utils/filtersHandler'
import { ProjectCard } from '../../components/ProjectCard'

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [showState, setShowState] = useState<ShowState>({
    category: 'All Projects',
    sort: 'Trending',
  })
  const navigate = useNavigate()
  const params = URLParams({ search, showState })
  const { projects } = useSearch({ params })

  useEffect(() => {
    navigate('/search?' + params.toString())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  return (
    <div className='flex flex-col bg-gray-200'>
      <div className='flex h-96 w-screen items-center justify-center overflow-hidden'>
        <div className='text-6xlxl absolute text-white'>
          <div className='absolute top-0 h-full w-full scale-110 rounded bg-white bg-opacity-20 drop-shadow-lg ' />
          <div className='relative '>
            <h2 className='flex items-center justify-center text-6xl font-medium'>
              Crew Campaigns
            </h2>
            <p className='pb-3 pt-1 text-xl'>
              Fund new and groundbreaking projects, including hits from
              Indiegogo InDemand
            </p>
          </div>
        </div>
        <img
          src='https://images.wallpaperscraft.com/image/single/coast_sea_rock_960168_3840x2400.jpg'
          alt=''
        />
      </div>
      <div className='flex flex-row'>
        <CategoriesContainer setShowState={setShowState} />
        <div className='block w-full items-center justify-center border border-gray-300'>
          <div className='flex items-center justify-center'>
            <input
              type='text'
              name='search'
              className='h-8 w-1/4 rounded-md border-2 border-neutral-100 bg-neutral-100 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
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
              className='hover:bg-secondaryLight flex h-8 items-center justify-center rounded-r-md bg-secondaryDark px-1 py-1 text-primary transition duration-300'
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
          <div className='flex justify-center'>
            <hr className='w-2/3 border-black' />
          </div>
          <div className='mt-10 flex w-10/12 items-end justify-end'>
            <div className='flex'>
              <h2 className='mr-2 flex items-center justify-center font-semibold'>
                Sort by{' '}
              </h2>
              <select
                className='broder-2 border-black'
                name='order'
                onChange={(event) => {
                  handleSortSelect({ event, setShowState })
                }}
                defaultValue='Trending'
              >
                <option value='' disabled>
                  Choose an option:
                </option>
                <option value='Trending'>Trending</option>
                <option value='Most Founded'>Most Founded</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center pb-12 pt-6'>
            <ul className='flex w-5/6 flex-wrap items-center justify-center gap-8'>
              {projects.projects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
