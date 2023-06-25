import Location from '@/assets/location.svg'
import { FavoritesCarrousel } from '@/components' 
import { About, SettingsForm } from './views'
import { useState } from 'react'
import { useUserIdStore } from '@/store'
import { useUser } from '@/hooks/useUser'

enum UserMenuOptions {
  Profile = 'Profile',
  Projects = 'Projects',
  Contributions = 'Contributions',
  Settings = 'Settings',
}

export const Profile: React.FC = () => {
  const { userId } = useUserIdStore()
  const { user } = useUser(userId)

  const [userMenu, setUserMenu] = useState<UserMenuOptions>(
    UserMenuOptions.Profile
  )

  const handleOnClick = (option: UserMenuOptions): void => {
    setUserMenu(option)
  }

  return (
    <div className='flex justify-center'>
      <div className='flex w-3/4 flex-col'>
        <div className='mt-10 flex '>
          <div className='mt-6'>
            <div>
              <h1 className='text-3xl font-bold text-primary'>{`${
                user?.name ?? 'Name'
              } ${user?.lastName ?? 'LastName'}`}</h1>
            </div>
            <div className='mb-10 flex items-center'>
              <img className='w-10' src={Location} alt='Location Pin' />
              <h2 className='text-2xl text-primary'>
                {`${user?.country ?? 'Country'}, ${user?.city ?? ''}`}
              </h2>
            </div>
          </div>
          <div>
            <img src={user?.avatar} alt='Avatar image' className='ml-10 w-32' />
          </div>
        </div>
        <div className='mt-5 flex items-start justify-start'>
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
        <div>
          {userMenu === UserMenuOptions.Profile && (
            <About
              aboutMe={user?.aboutMe ?? 'About me description...'}
              avatar={user?.avatar ?? 'Invalid image'}
            />
          )}
        </div>
        <div>
          {userMenu === UserMenuOptions.Projects && (
            <FavoritesCarrousel width={'w-full'} margin={'mt-5'} />
          )}
        </div>
        <div>{userMenu === UserMenuOptions.Settings && <SettingsForm />}</div>
      </div>
    </div>
  )
}
