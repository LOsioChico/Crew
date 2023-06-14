import { useAuthModal } from '@/store'

export const Login: React.FC = () => {
  const { closeAuthModal, openRegisterModal } = useAuthModal()
  return (
    <div className='mt-48 w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
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
      <p className='mb-6 flex items-center  justify-center text-gray-600'>
        Log in to continue
      </p>

      <div className='mb-6'>
        <div className='mb-2'>
          <label htmlFor='email' className='block pl-1 text-sm text-gray-700'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your Email'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block pl-1 text-sm text-gray-700'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-3 font-light shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your Password'
          />
        </div>

        <div className='mb-4'>
          <a
            href='#'
            className='flex justify-end text-sm underline duration-300 hover:text-secondaryDark'
          >
            Forgot your password?
          </a>
        </div>

        <button className='mb-2 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-secondaryDark'>
          LOG IN
        </button>
      </div>
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
