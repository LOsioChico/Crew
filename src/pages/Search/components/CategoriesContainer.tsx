import { Category } from '.'

interface CategoriesContainerProps {
  setShowState: React.Dispatch<
    React.SetStateAction<{
      category: string
      sort: string
    }>
  >
}

export const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  setShowState,
}) => {
  return (
    <aside>
      <div className='mt-20 h-72 pl-12 pt-6'>
        <ul className='h-auto w-60 text-base last:mb-4'>
          <li className='mb-2'>
            <h2 className='mb-2 text-lg font-bold text-black'> Categories:</h2>
            <hr />
          </li>
          {categories.map((category) => (
            <Category
              key={category}
              setShowState={setShowState}
              name={category}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}

const categories = [
  'All Projects',
  'Tech & Innovation',
  'Creative Works',
  'Community Projects',
]
