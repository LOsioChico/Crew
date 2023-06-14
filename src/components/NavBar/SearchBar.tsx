import { useState, type ChangeEvent } from 'react'

export const SearchBar: React.FC = () => {
  const [ProjectName, setProjectName] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setProjectName(event.target.value)
  }

  return (
    <div className='relative flex w-96'>
      <input
        type='text'
        value={ProjectName}
        onChange={handleInputChange}
        className='h-8 w-full rounded-md border-2 border-neutral-300 bg-neutral-300 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
      />
      <button
        type='submit'
        className='hover:bg-secondaryLight absolute right-0 flex h-8 items-center justify-center rounded-r-md bg-secondaryDark px-1 py-1 text-primary transition duration-300'
      >
        <span className='material-symbols-outlined cursor-pointer'>search</span>
      </button>
    </div>
  )
}
