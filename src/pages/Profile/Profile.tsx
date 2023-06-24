import locationPin from '@/assets/locationPin.svg'

export const Profile: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-3/4 flex-col '>
        <div className='mt-16'>
          <h1 className='text-3xl font-bold'>Your Name</h1>
        </div>
        <div className='mb-10 flex items-center'>
          <img
            className='mr-2 w-6 text-red-500'
            src={locationPin}
            alt='Location Pin'
          />
          <h2 className='text-2xl '> País </h2>
        </div>
        <div className='flex items-start justify-start'>
          <div>
            <p className='mr-5 text-2xl'>Profile</p>
          </div>
          <div>
            <p className='mr-5 text-2xl'>Projects</p>
          </div>
          <div>
            <p className='mr-5 text-2xl'>Contributions</p>
          </div>
          <div>
            <p className='text-2xl'>Referrals</p>
          </div>
        </div>
        <hr className='border-thick mb-1 border border-black' />
        <div className='flex h-96 w-full border border-black'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
