import { Logo } from '@/assets/Logo'
import { Auth } from '@/auth'
import { useAuthHandler } from '@/auth/hooks'
import { Explorer } from '@/components/NavBar/Explorer'
import { PrivateRoutes, PublicRoutes } from '@/router/RouterProvider'
import { useModalAuthStore, useUserIdStore } from '@/store'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SearchBar } from '.'
import { ProfileDropdown } from './ProfileDropdown'

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useAuthHandler()
  const { userId } = useUserIdStore()
  const { modalAuth, setModalAuth } = useModalAuthStore()

  return (
    <header>
      <nav className='flex h-16 items-center justify-between bg-primary font-semibold text-white'>
        <div className='ml-8 flex items-center justify-center gap-5'>
          <div
            className='cursor-pointer duration-300'
            onClick={() => {
              navigate('/')
            }}
          >
            <Logo />
          </div>

          {location !== PublicRoutes.search && <Explorer />}
        </div>
        {location !== PublicRoutes.search && <SearchBar />}
        <div className='mr-8 flex items-center gap-5 '>
          <div className={'border-r border-gray-400'}>
            <Link
              className='cursor-pointer select-none pr-5 duration-300 hover:text-secondary active:scale-95'
              to={PrivateRoutes.createProject}
            >
              Start a project
            </Link>
          </div>
          {userId.length === 0 && (
            <>
              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('login')
                }}
              >
                Log In
              </button>

              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('register')
                }}
              >
                Sign Up
              </button>
            </>
          )}
          {userId.length > 0 && (
            <div className='flex items-center'>
              <div className='relative mr-2 h-10 w-10'>
                <div className='absolute inset-0 overflow-hidden rounded-full'>
                  <img
                    className='h-full w-full object-cover'
                    src='https://s1.abcstatics.com/media/play/2020/09/29/avatar-kE4H--620x349@abc.jpeg'
                    alt='Profile'
                  />
                </div>
              </div>
              <ProfileDropdown />
            </div>
          )}
        </div>
      </nav>
      <Auth modalAuth={modalAuth} setModalAuth={setModalAuth} />
    </header>
  )
}
