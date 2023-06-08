export const Footer: React.FC = () => {
  return (
    <div className='flex h-[500px] w-full justify-around bg-gray-100 pb-10 pt-10'>
      <div>
        <div className=' text-gray-500'>EXPLORE</div>
        <div>
          <div className='mt-3 flex flex-col'>
            <a href='#' className='hover:underline'>
              What We Do
            </a>
            <a href='#' className='hover:underline'>
              Funding
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className=' text-gray-500'>ABOUT</div>
        <div>
          <div className='mt-3 flex flex-col'>
            <a href='#' className='hover:underline'>
              About Us
            </a>
            <a href='#' className='hover:underline'>
              Blog
            </a>
            <a href='#' className='hover:underline'>
              Trust & Safety
            </a>
            <a href='#' className='hover:underline'>
              Help & Support
            </a>
            <a href='#' className='hover:underline'>
              Press
            </a>
            <a href='#' className='hover:underline'>
              Careers
            </a>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className='text-gray-500'>ENTREPRENEURS</div>
        <div>
          <div className='mt-3 flex flex-col'>
            <a href='#' className='hover:underline'>
              How It Works
            </a>
            <a href='#' className='hover:underline'>
              Education Center
            </a>
            <a href='#' className='hover:underline'>
              Experts Directory
            </a>
            <a href='#' className='hover:underline'>
              Fees
            </a>
            <a href='#' className='hover:underline'>
              Enterprise
            </a>
            <a href='#' className='hover:underline'>
              China
            </a>
          </div>
        </div>
      </div>

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
    </div>
  )
}
