import { Logo } from '@/assets/Logo'
import { Auth } from '@/auth'
import { useAuthHandler } from '@/auth/hooks'
import { Explorer } from '@/components/NavBar/Explorer'
import { supabase } from '@/utils'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SearchBar } from '.'
import { ProfileDropdown } from './ProfileDropdown'

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const { session, modalAuth, setModalAuth } = useAuthHandler()

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

          {location !== '/search' && <Explorer />}
        </div>
        {location !== '/search' && <SearchBar />}
        <div className='mr-8 flex items-center gap-5 '>
          <div className={'border-r border-gray-400'}>
            <Link
              className='cursor-pointer select-none pr-5 duration-300 hover:text-secondary active:scale-95'
              to='/project-form'
            >
              Start a project
            </Link>
          </div>
          {!session && (
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

          {session && (
            <button
              className='cursor-pointer select-none duration-300 hover:scale-105 hover:text-secondary'
              onClick={() => {
                void supabase.auth.signOut()
              }}
            >
              Log Out
            </button>
          )}
        </div>
        <ProfileDropdown />
      </nav>
      <Auth modalAuth={modalAuth} setModalAuth={setModalAuth} />
    </header>
  )
}
