import { useState } from 'react'

export const Explorer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className='ransition flex items-center  rounded-md p-2  duration-300 ease-in-out hover:scale-110 '
        onClick={toggleModal}
      >
        Explorer
        <span className='material-symbols-outlined ml-1 text-sm'>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className='absolute top-0 z-10 ml-[300px] mt-16 flex h-[200px] w-[300px] rounded-b-xl bg-primary pl-12 pt-6'>
          <ul>
            <li className='mb-2 '>
              <button
                className='text-white duration-300 ease-in-out hover:scale-110'
                onClick={toggleModal}
              >
                All Projects
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-110'
                onClick={toggleModal}
              >
                Tech & Innovation
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-110'
                onClick={toggleModal}
              >
                Creative Works
              </button>
            </li>
            <li className='mb-2'>
              <button
                className='text-white duration-300 ease-in-out hover:scale-110'
                onClick={toggleModal}
              >
                Community Projects
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
