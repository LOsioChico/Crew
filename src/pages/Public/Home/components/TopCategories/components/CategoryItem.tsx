import { icons } from '@/assets'
import { Link } from 'react-router-dom'

interface CategoryItemProps {
  category: keyof typeof Categories
  text: string
}

enum Categories {
  Tech = 'Tech & Innovation',
  Creative = 'Creative Works',
  Community = 'Community Projects',
  More = 'More',
}

enum Links {
  Tech = '/search?category=Tech+%26+Innovation&sort=Trending&q=&s=20&p=0',
  Creative = '/search?category=Creative+Works&sort=Trending&q=&s=20&p=0',
  Community = '/search?category=Community+Projects&sort=Trending&q=&s=20&p=0',
  More = '/search?category=all&sort=Trending&q=&s=20&p=0',
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  text,
}) => {
  return (
    <li className='mx-4'>
      <Link
        to={Links[category]}
        className='flex flex-col items-center justify-center'
      >
        <img src={icons[category]} className=' ml-auto mr-auto h-12 w-12' />
        <span className='text-sm'>{text}</span>
      </Link>
    </li>
  )
}
