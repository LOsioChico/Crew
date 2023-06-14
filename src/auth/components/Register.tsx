import { useAuthModal } from '@/store'

export const Register: React.FC = () => {
  const { closeAuthModal, openLoginModal } = useAuthModal()
  return (
    <main className='mt-40 w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
      <section className='flex justify-end'>
        <button
          className='right-0 top-0 text-xl duration-300 hover:text-red-700'
          onClick={() => {
            closeAuthModal()
          }}
        >
          X
        </button>
      </section>

      <h2 className='mb-1 flex items-center justify-center text-3xl font-bold'>
        Welcome!
      </h2>
      <p className='mb-6 flex items-center  justify-center text-gray-600'>
        Sign up to join Crew
      </p>

      <section className='mb-6'>
        <div className='mb-3'>
          <label
            htmlFor='text'
            className='block text-base font-medium text-gray-700'
          >
            First Name
          </label>
          <input
            id='First_Name'
            type='text'
            name='First Name'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your First Name'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='block text-base font-medium text-gray-700'
          >
            Last Name
          </label>
          <input
            id='Last_Name'
            type='text'
            name='Last Name'
            className='h-10 w-full rounded-md border-2 border-gray-300 pl-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Your Last Name'
          />
        </div>
        <div className='mb-3'>
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

        <div className='mb-6'>
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

        <div className='flex pb-2 pl-1 align-baseline text-sm'>
          <input type='checkbox' className='mr-2 h-4 w-4' id='Sign' />
          <label htmlFor='Sign'>Sign me up for the Crew newsletter</label>
        </div>

        <section className='flex pl-1 align-baseline text-sm'>
          <div>
            <input type='checkbox' className='mr-2 h-4 w-4' id='Terms' />
          </div>
          <label htmlFor='Terms'>
            I agree to the{' '}
            <span className='cursor-pointer font-bold underline duration-300 hover:text-secondaryDark'>
              Terms of Use
            </span>{' '}
            and have read and understand the{' '}
            <span className='cursor-pointer font-bold underline duration-300 hover:text-secondaryDark'>
              Privacy Policy
            </span>
          </label>
        </section>

        <button className='mb-2 mt-6 h-10 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-secondaryDark'>
          CREATE ACCOUNT
        </button>
      </section>
      <p className='flex justify-center pt-1'>
        Already have an account?&nbsp;
        <span
          className='cursor-pointer font-bold underline duration-300 hover:text-secondaryDark'
          onClick={() => {
            openLoginModal()
          }}
        >
          Log In
        </span>
      </p>
    </main>
  )
}
