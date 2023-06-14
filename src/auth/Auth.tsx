import { useAuthModal } from '@/store'
import { Login, Register } from './components'

export const Auth: React.FC = () => {
  const body = document.querySelector('body')
  const { state, closeAuthModal } = useAuthModal()

  if (state === 'closed') {
    body?.classList.remove('overflow-hidden')
    return null
  } else {
    body?.classList.add('overflow-hidden')
  }

  return (
    <div
      className='absolute -top-20 z-10 flex h-[120%] w-screen items-start  justify-center overflow-scroll bg-black bg-opacity-40'
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuthModal()
      }}
    >
      {state === 'register' && <Register />}
      {state === 'login' && <Login />}
    </div>
  )
}
