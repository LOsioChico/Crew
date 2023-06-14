import { useAuthModal } from '@/store'
import { AuthInput } from '.'

export const Register: React.FC = () => {
  const { closeAuthModal, openLoginModal } = useAuthModal()
  return (
    <main className='mt-40 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
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
      <p className='mb-4 flex items-center  justify-center text-gray-600'>
        Sign up to join Crew
      </p>

      <AuthInput label='First Name' type='text' placeholder='Your First Name' />
      <AuthInput label='Last Name' type='text' placeholder='Your Last Name' />
      <AuthInput label='Email' type='email' placeholder='Your Email' />
      <AuthInput label='Password' type='password' placeholder='Your Password' />

      <section className='flex pl-1 align-baseline text-sm'>
        <div>
          <input type='checkbox' className='mr-1 h-4 w-5' id='Terms' required />
        </div>
        <label htmlFor='Terms'>
          I agree to the{' '}
          <span className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'>
            Terms of Use
          </span>{' '}
          and have read and understand the{' '}
          <span className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'>
            Privacy Policy
          </span>
        </label>
      </section>

      <button className='mb-2 mt-6 h-10 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-secondaryDark'>
        CREATE ACCOUNT
      </button>
      <p className='flex justify-center pt-1'>
        Already have an account?&nbsp;
        <span
          className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'
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
