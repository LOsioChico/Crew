import Location from '@/assets/location.svg'
import { FavoritesCarrousel } from '../Home/components'

export const Profile: React.FC = () => {
  // /userRoute/userDetails?id=${id}
  // const { userId } = useUserIdStore()

  return (
    <div className='flex justify-center'>
      <div className='flex w-3/4 flex-col'>
        <div className='mt-16'>
          <h1 className='text-3xl font-bold'>Your Name</h1>
        </div>
        <div className='mb-10 flex items-center'>
          <img
            className='w-10 text-red-500'
            src={Location}
            alt='Location Pin'
          />
          <h2 className='text-2xl'>Location</h2>
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
        <hr className='my-1 border border-black' />
        <div className='flex h-auto w-full border border-black'>
          <div className='w-8/12'>
            <img
              src='https://images.wallpaperscraft.com/image/single/bell_tower_building_paving_stones_968989_3840x2400.jpg'
              alt=''
              className='min-h-[220px] w-auto min-w-[355px] '
            />
          </div>
          <div className='w-4/12 text-center text-4xl'>
            <p>About me</p>
            <p className='mt-5 text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos
              quae tenetur nam iste esse, cupiditate delectus doloremque nemo ad
              nostrum nobis maxime vitae minus vero recusandae architecto sunt
              praesentium.
            </p>
          </div>
        </div>
        <div className='mt-28'>
          <FavoritesCarrousel width={'w-full'} margin={''} />
        </div>
      </div>
    </div>
  )
}
