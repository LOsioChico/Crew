import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProfileDropdown: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='relative '>
        <button
          className='active:scale-120 flex select-none items-center rounded-md p-2 duration-300 ease-in-out hover:text-secondary'
          onClick={toggleModal}
        >
          Your Name
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
            <div className='absolute right-0 top-0 z-10 mt-12 flex h-auto w-[150px] flex-col items-end justify-end rounded-xl bg-primary pr-12 pt-6'>
              <ul className=' last:mb-4'>
                <li className='mb-2'>
                  <button
                    className='active:scale-120 text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      navigate('/search?category=all&sort=Trending&q=&s=20&p=0')
                    }}
                  >
                    Profile
                  </button>
                </li>
                <li className='mb-2'>
                  <button
                    className='active:scale-120 text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      navigate(
                        '/search?category=Tech+%26+Innovation&sort=Trending&q=&s=20&p=0'
                      )
                    }}
                  >
                    Settings
                  </button>
                </li>
                <li className='mb-2'>
                  <button
                    className='active:scale-120 text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      navigate(
                        '/search?category=Creative+Works&sort=Trending&q=&s=20&p=0'
                      )
                    }}
                  >
                    Log Out
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
      </div>
    </>
  )
}
