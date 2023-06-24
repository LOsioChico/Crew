export const Profile: React.FC = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='inline-block w-3/4 items-center justify-center'>
        <div className='mb-10 mt-16 flex w-full'>
          <h1 className='text-3xl font-bold'>Your Name</h1>
        </div>
        <div className='flex items-start justify-start'>
          <div>
            <p className='text-2xl'>Profile</p>
          </div>
          <div>
            <p className='ml-6 text-2xl'>Projects</p>
          </div>
          <div>
            <p className='ml-6 text-2xl'>Contributions</p>
          </div>
          <div>
            <p className='ml-6 text-2xl'>Referrals</p>
          </div>
        </div>
        <hr />
        <div className='flex h-96 border border-black'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
