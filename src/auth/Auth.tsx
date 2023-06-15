import { useAuthModal } from '@/store'
import { Login, Register } from './components'

export const Auth: React.FC = () => {
  const { state, closeAuthModal } = useAuthModal()
  if (state === 'closed') return null

  return (
    <div
      className='fixed -top-20 z-10 flex h-[120%] w-screen items-start justify-center bg-black bg-opacity-40'
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuthModal()
      }}
    >
      {state === 'register' && <Register />}
      {state === 'login' && <Login />}
    </div>
  )
}
