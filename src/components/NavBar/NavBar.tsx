import { Logo } from '@/assets/Logo'
import { SearchBar } from '.'
import { Explorer } from '@/components/NavBar/Explorer'

export const NavBar: React.FC = () => {
  return (
    <header>
      <nav className='flex h-16 items-center justify-between bg-primary font-semibold text-white'>
        <div className='ml-8 flex items-center justify-center gap-5'>
          <Logo />
          <Explorer />
        </div>
        <SearchBar />
        <div className='mr-8 flex items-center gap-5 '>
          <div className='cursor-pointer border-r border-gray-500 pr-5'>
            Crear una Campaña
          </div>
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
      </nav>
    </header>
  )
}
