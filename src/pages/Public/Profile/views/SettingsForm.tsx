/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form'
import { type IUser } from '@/interfaces'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  UserValidation,
  type UserSettingsFormType,
} from '@/schemas/UserValidation'

interface SettingsProps {
  user: IUser | undefined
}

export const SettingsForm: React.FC<SettingsProps> = (props) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSettingsFormType>({
    mode: 'onBlur',
    resolver: zodResolver(UserValidation),
  })

  useEffect(() => {
    setValue('name', props.user?.name ?? '')
    setValue('lastName', props.user?.lastName ?? '')
    setValue('email', props.user?.email ?? '')
    setValue('country', props.user?.country ?? '')
    setValue('city', props.user?.city ?? '')
    setValue('aboutMe', props.user?.aboutMe ?? '')
    setValue('shortDescription', props.user?.shortDescription ?? '')
  }, [])

  const onSubmit = async (data: UserSettingsFormType): Promise<void> => {
    console.log(data)
  }

  return (
    <div className='relative h-auto w-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='name' className='mb-2 block'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            placeholder='Your name'
            {...register('name')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.name != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.name?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='lastName' className='mb-2 block'>
            Last Name:
          </label>
          <input
            type='text'
            id='lastName'
            placeholder='Your last name'
            {...register('lastName')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.lastName != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.lastName?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='email' className='mb-2 block'>
            Email:
          </label>
          <input
            type='text'
            id='email'
            placeholder='Your email'
            {...register('email')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.email != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.email?.message ?? 'Please enter a valid email'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='country' className='mb-2 block'>
            Country:
          </label>
          <input
            type='text'
            id='country'
            placeholder='Your country'
            {...register('country')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.country != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.country?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='city' className='mb-2 block'>
            City:
          </label>
          <input
            type='text'
            id='city'
            placeholder='Your city...'
            {...register('city')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.city != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.city?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='aboutMe' className='mb-2 block'>
            About Me:
          </label>
          <textarea
            id='aboutMe'
            placeholder='Tell something about your self'
            {...register('aboutMe')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.aboutMe != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.aboutMe?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='shortDescription' className='mb-2 block'>
            Short Description:
          </label>
          <textarea
            id='shortDescription'
            placeholder='Tell something about your self'
            {...register('shortDescription')}
            className='h-20 w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.shortDescription != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.shortDescription?.message ?? 'This field is required'}
            </span>
          )}
        </div>
        <button
          type='submit'
          className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
        >
          Save
        </button>
      </form>
      <div className='mb-20 mt-8'>
        <label htmlFor='avatar' className='mb-2 block text-lg font-semibold'>
          Avatar:
        </label>
        <input
          type='file'
          id='avatar'
          accept='image/*'
          // {...register('avatar')}
          className='w-[520px]'
        />
      </div>
    </div>
  )
}
