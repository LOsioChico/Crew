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
      <div className='mt-16 flex h-auto w-[240px] rounded-b-xl bg-primary pl-12 pt-6'>
        <ul className='last:mb-4'>
          <li>
            <h2 className='mb-2 font-bold text-white'> Categories:</h2>
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
