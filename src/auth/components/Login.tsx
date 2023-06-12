import { useAuthModal } from '@/store'

export const Login: React.FC = () => {
  const { closeAuthModal } = useAuthModal()
  return (
    <div className='mt-48 w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
      <div className='flex justify-end'>
        <button
          className='right-0 top-0'
          onClick={() => {
            closeAuthModal()
          }}
        >
          X
        </button>
      </div>

      <h2 className='j mb-4 flex items-center justify-center text-2xl font-bold'>
        Welcome Back!
      </h2>
      <p className='mb-6 flex items-center  justify-center text-gray-600'>
        Log in to continue
      </p>

      <div className='mb-6'>
        <div className='mb-2'>
          <label
            htmlFor='email'
            className='block text-base font-medium text-gray-700'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your Email'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-base font-medium text-gray-700'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your Password'
          />
        </div>

        <div className='mb-4'>
          <a href='#' className='flex justify-end text-sm text-indigo-600'>
            Forgot your password?
          </a>
        </div>

        <button className='mb-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'>
          LOG IN
        </button>
        <p className='py-2 text-center text-gray-500'>OR</p>
        <div>
          <button className='w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700'>
            CONTINUE WITH:
          </button>
        </div>
        <p className='flex justify-center pt-3 text-xs'>
          No posts without your permission.
        </p>
      </div>
      <p className='flex justify-center pt-5'>
        New to Crew?&nbsp;
        <a href='#' className='font-bold underline'>
          Sign Up
        </a>
      </p>
    </div>
  )
}
