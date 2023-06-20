import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Explorer: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className='flex select-none items-center  rounded-md p-2 duration-300 ease-in-out hover:text-secondary active:scale-95'
        onClick={toggleModal}
      >
        Explorer
        <span
          className={`material-symbols-outlined ml-1 text-sm duration-300 ${
            isOpen ? 'rotate-180 transform' : ''
          }`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <>
          <div className='absolute -top-4 left-40 z-10 mt-16 flex h-auto w-[240px] rounded-b-xl bg-primary pl-12 pt-6'>
            <ul className='last:mb-4'>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate('/search?category=all&sort=Trending&q=&s=20&p=0')
                  }}
                >
                  All Projects
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(
                      '/search?category=Tech+%26+Innovation&sort=Trending&q=&s=20&p=0'
                    )
                  }}
                >
                  Tech & Innovation
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(
                      '/search?category=Creative+Works&sort=Trending&q=&s=20&p=0'
                    )
                  }}
                >
                  Creative Works
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(
                      '/search?category=Community+Projects&sort=Trending&q=&s=20&p=0'
                    )
                  }}
                >
                  Community Projects
                </button>
              </li>
            </ul>
          </div>

          <div
            className='fixed left-0 top-0 z-0 h-screen w-screen'
            onClick={toggleModal}
          />
        </>
      )}
    </>
  )
}
