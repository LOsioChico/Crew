import { useAuthModal } from '@/store'
import { AuthInput } from '.'

export const Login: React.FC = () => {
  const { closeAuthModal, openRegisterModal } = useAuthModal()
  return (
    <div className='mt-48 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
      <div className='flex justify-end'>
        <button
          className='right-0 top-0 text-xl duration-300 hover:text-red-700'
          onClick={() => {
            closeAuthModal()
          }}
        >
          X
        </button>
      </div>

      <h2 className='mb-1 flex items-center justify-center text-3xl font-bold'>
        Welcome Back!
      </h2>
      <p className='mb-4 flex items-center  justify-center text-gray-600'>
        Log in to continue
      </p>

      <div className='mb-4'>
        <AuthInput label='Email' type='email' placeholder='Your Email' />
        <AuthInput
          label='Password'
          type='password'
          placeholder='Your Password'
        />
      </div>
      <div className='mb-2'>
        <a
          href='#'
          className='flex justify-end text-sm underline duration-300 hover:text-secondaryDark'
        >
          Forgot your password?
        </a>
      </div>

      <button className='mb-5 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-secondaryDark'>
        LOG IN
      </button>
      <p className='flex justify-center'>
        New to Crew?&nbsp;
        <span
          className='cursor-pointer font-bold underline
          duration-300 hover:text-secondaryDark
          '
          onClick={() => {
            openRegisterModal()
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}
