import { Logo } from '@/assets/Logo'

export const NavBar: React.FC = () => {
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
          <button>Nuestro top 10</button>
          <div className='flex'>
            <div className='absolute inset-y-0 left-0 flex  items-center pl-3'></div>
            <input
              type='search'
              id='default-search'
              className='w-full rounded-lg p-4 pl-4 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Buscar proyecto...'
              required
            />
            <button type='submit' className=' px-1 py-1 text-sm  text-white '>
              <img src='src/assets/search.svg' className='h-5 cursor-pointer' />
            </button>
          </div>
        </div>
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
