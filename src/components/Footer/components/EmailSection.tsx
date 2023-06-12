export const EmailSection: React.FC = () => {
  return (
    <div className='w-full max-w-xs '>
      <span className='material-symbols-outlined mb-1 flex justify-center text-6xl text-[#252E56]'>
        mail
      </span>
      <h3 className='text-center text-lg font-bold'>Find it first on Crew</h3>
      <p className='mb-10 text-center'>
        Discover new and clever products in the Crew newsletter
      </p>
      <input
        type='email'
        placeholder='Your email address'
        className='mb-5 h-12 w-full border pl-4'
      />

      <div className='flex '>
        <input type='checkbox' className='mr-3 h-9 w-9' />
        <p>
          I agree to the Terms of Use and have read and understand the Privacy
          Policy
        </p>
      </div>
      <button className='mt-5 h-12 w-full bg-[#252E56] font-bold text-white hover:bg-[#00146d]'>
        SIGN ME UP
      </button>
    </div>
  )
}
