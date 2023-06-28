import Location from '@/assets/location.svg'
import { useUser } from '@/hooks/useUser'
import { useUserIdStore } from '@/store'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { About, Contributions, SettingsForm, UserProjectsFav } from './views'

enum UserMenuOptions {
  Profile = 'Profile',
  Projects = 'Projects',
  Contributions = 'Contributions',
  Settings = 'Settings',
}

interface UserParams {
  id: string
}

export const Profile: React.FC = () => {
  const { userId } = useUserIdStore()
  const { id } = useParams<keyof UserParams>() as UserParams
  const { user } = useUser(id)

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
                  ? 'cursor-default font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'cursor-pointer hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
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
                  ? 'cursor-default font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'cursor-pointer hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
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
                  ? 'cursor-default font-extrabold text-secondaryDark underline underline-offset-8'
                  : 'cursor-pointer hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
              }`}
              onClick={() => {
                handleOnClick(UserMenuOptions.Contributions)
              }}
            >
              {UserMenuOptions.Contributions}
            </p>{' '}
          </div>
          {id === userId && (
            <div className='flex-none'>
              <p
                className={`mr-10 text-2xl duration-300 ease-in-out ${
                  userMenu === UserMenuOptions.Settings
                    ? 'cursor-default font-extrabold text-secondaryDark underline underline-offset-8'
                    : 'cursor-pointer hover:scale-110 hover:font-semibold hover:text-secondary active:scale-95 '
                }`}
                onClick={() => {
                  handleOnClick(UserMenuOptions.Settings)
                }}
              >
                {UserMenuOptions.Settings}
              </p>{' '}
            </div>
          )}
        </div>
        <hr className='my-3 border border-primary' />
        {userMenu === UserMenuOptions.Profile && <About user={user} />}
        {userMenu === UserMenuOptions.Projects && <UserProjectsFav />}
        {userMenu === UserMenuOptions.Contributions && <Contributions />}
        {id === userId &&
          userMenu === UserMenuOptions.Settings &&
          user !== undefined && <SettingsForm user={user} />}
      </div>
    </div>
  )
}
