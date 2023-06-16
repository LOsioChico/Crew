import { handleCategoryFilter } from '../utils/filtersHandler'

interface CategoryProps {
  setShowState: React.Dispatch<
    React.SetStateAction<{
      category: string
      sort: string
    }>
  >
  name: string
}

export const Category: React.FC<CategoryProps> = ({ setShowState, name }) => {
  return (
    <li className='my-2'>
      <button
        className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
        onClick={(event) => {
          handleCategoryFilter({ event, setShowState })
        }}
        name={name}
      >
        {name}
      </button>
    </li>
  )
}
