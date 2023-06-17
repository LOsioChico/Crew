import { Logo } from '@/assets/Logo'
import { Auth } from '@/auth'
import { Explorer } from '@/components/NavBar/Explorer'
import { supabase } from '@/utils'
import { type Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBar } from '.'

export const NavBar: React.FC = () => {
  const [modalAuth, setModalAuth] = useState<'closed' | 'login' | 'register'>(
    'closed'
  )
  const [session, setSession] = useState<Session | null | 'si'>(null)
  const navigate = useNavigate()

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })
  }, [])

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        setSession('si')
        setModalAuth('closed')
      }
      if (event === 'SIGNED_OUT') {
        setSession(null)
      }
    })
  }, [setModalAuth])

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
          <Explorer />
        </div>
        <SearchBar />
        <div className='mr-8 flex items-center gap-5 '>
          <div className={'border-r border-gray-400'}>
            <Link
              className='duration-300hover:text-secondary cursor-pointer select-none pr-5 active:scale-95'
              to='/project-form'
            >
              Crear una Campaña
            </Link>
          </div>
          {session === null && (
            <>
              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('login')
                }}
              >
                Iniciar Sesión
              </button>

              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('register')
                }}
              >
                Registrarse
              </button>
            </>
          )}

          {session !== null && (
            <button
              className='cursor-pointer select-none duration-300 hover:scale-105 hover:text-secondary'
              onClick={() => {
                void supabase.auth.signOut()
              }}
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </nav>
      <Auth modalAuth={modalAuth} setModalAuth={setModalAuth} />
    </header>
  )
}
