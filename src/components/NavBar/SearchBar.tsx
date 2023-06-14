import { useState, type ChangeEvent } from 'react'

export const SearchBar: React.FC = () => {
  const [ProjectName, setProjectName] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setProjectName(event.target.value)
  }

  return (
    <div className='flex'>
      <input
        type='text'
        value={ProjectName}
        onChange={handleInputChange}
        className='h-8 w-full rounded-md border-2 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
      />
      <button type='submit' className=' px-1 py-1 text-sm  text-white '>
        <img src='src/assets/search.svg' className='h-5 cursor-pointer' />
      </button>
    </div>
  )
}
