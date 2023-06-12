import logo from '../../../../assets/favicon.png'

export const TopCategories: React.FC = () => {
  return (
    <div className='border-box m-auto flex h-auto w-3/4 flex-col items-center justify-around border border-black'>
      <div className='flex w-full flex-row justify-evenly border border-red-600'>
        <div className='flex h-full items-center justify-center border border-green-700'>
          <div className='flex items-center'>
            <img className='' src={logo} />
          </div>
        </div>
        <div className='flex w-3/4 flex-col items-center border border-green-700 p-5'>
          <h2 className='text-xl font-bold'>Which categories interest you?</h2>
          <h4 className='mt-3 text-center text-sm'>
            Discover projects just for you and get great recommendations when
            you select interestsssssssssssss.
          </h4>
          <div className='flex w-1/2 flex-row justify-evenly'>
            <button className='mt-5 h-12 w-40 rounded-md bg-primary pl-2 pr-2 font-bold uppercase text-white duration-300 hover:bg-secondaryDark'>
              Sign Up Now
            </button>
            <button className='mt-5 h-12 w-40 rounded-md bg-primary pl-2 pr-2 font-bold uppercase text-white duration-300 hover:bg-secondaryDark'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <p>category</p>
      </div>
    </div>
  )
}

// h-screen w-screen flex items-center justify-center
