import { Logo } from '@/assets/Logo'
import { useAuthModal } from '@/store'
import { SearchBar } from '.'

export const NavBar: React.FC = () => {
  const { openLoginModal } = useAuthModal()
  const { openRegisterModal } = useAuthModal()
  return (
    <header>
      <nav className='flex h-16 items-center justify-between bg-primary font-semibold text-white'>
        <div className='ml-8 flex items-center justify-center gap-5'>
          <Logo />
          <button className='relative pr-2'>
            Explorar
            <img
              src='src/assets/angle-down.svg'
              className='absolute -right-3 top-1 h-5'
            />
          </button>
        </div>
        <SearchBar />
        <div className='mr-8 flex items-center gap-5 '>
          <div className='cursor-pointer border-r border-gray-500 pr-5'>
            Crear una Campaña
          </div>
          <button
            className='cursor-pointer'
            onClick={() => {
              openLoginModal()
            }}
          >
            Iniciar Sesión
          </button>
          <button
            className='cursor-pointer'
            onClick={() => {
              openRegisterModal()
            }}
          >
            Registrarse
          </button>
        </div>
      </nav>
    </header>
  )
}
