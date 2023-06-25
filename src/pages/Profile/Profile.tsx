import Location from '@/assets/location.svg'
import { FavoritesCarrousel } from '../Home/components'
import { About, SettingsForm } from './components'
import { useState } from 'react'
// import { useUserIdStore } from '@/store'
// import { CrewApi } from '@/api'

enum UserMenuOptions {
  Profile = 'Profile',
  Projects = 'Projects',
  Contributions = 'Contributions',
  Settings = 'Settings',
}

export const Profile: React.FC = () => {
  // /userRoute/userDetails?id=${id}
  // const { userId } = useUserIdStore()

  const [userMenu, setUserMenu] = useState<UserMenuOptions>(
    UserMenuOptions.Profile
  )
  console.log(userMenu)

  const handleOnClick = (option: UserMenuOptions): void => {
    setUserMenu(option)
  }

  return (
    <div className='flex justify-center'>
      <div className='flex w-3/4 flex-col'>
        <div className='mt-16'>
          <h1 className='text-3xl font-bold text-primary'>Your Name</h1>
        </div>
        <div className='mb-10 flex items-center'>
          <img
            className='w-10 text-red-500'
            src={Location}
            alt='Location Pin'
          />
          <h2 className='text-2xl text-primary'>Location</h2>
        </div>
        <div className='flex items-start justify-start'>
          <div className='flex-none'>
            <p
              className={`mr-10 text-2xl duration-300 ease-in-out ${
                userMenu === UserMenuOptions.Profile
                  ? 'font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
              }`}
              onClick={() => {
                handleOnClick(UserMenuOptions.Profile)
              }}
            >
              {UserMenuOptions.Profile}
            </p>
          </div>
          <div className='flex-none'>
            <p
              className={`mr-10 text-2xl duration-300 ease-in-out ${
                userMenu === UserMenuOptions.Projects
                  ? 'font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
              }`}
              onClick={() => {
                handleOnClick(UserMenuOptions.Projects)
              }}
            >
              {UserMenuOptions.Projects}
            </p>{' '}
          </div>
          <div className='flex-none'>
            <p
              className={`mr-10 text-2xl duration-300 ease-in-out ${
                userMenu === UserMenuOptions.Contributions
                  ? 'font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
              }`}
              onClick={() => {
                handleOnClick(UserMenuOptions.Contributions)
              }}
            >
              {UserMenuOptions.Contributions}
            </p>{' '}
          </div>
          <div className='flex-none'>
            <p
              className={`mr-10 text-2xl duration-300 ease-in-out ${
                userMenu === UserMenuOptions.Settings
                  ? 'font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
              }`}
              onClick={() => {
                handleOnClick(UserMenuOptions.Settings)
              }}
            >
              {UserMenuOptions.Settings}
            </p>{' '}
          </div>
        </div>
        <hr className='my-3 border border-primary' />
        <div>{userMenu === UserMenuOptions.Profile && <About />}</div>
        <div>
          {userMenu === UserMenuOptions.Projects && (
            <FavoritesCarrousel width={'w-full'} margin={'mt-28'} />
          )}
        </div>
        <div>{userMenu === UserMenuOptions.Settings && <SettingsForm />}</div>
      </div>
    </div>
  )
}
