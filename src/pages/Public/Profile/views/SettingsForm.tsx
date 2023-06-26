/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form'
import { type IUser } from '@/interfaces'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  UserValidation,
  type UserSettingsFormType,
} from '@/schemas/UserValidation'
import { CrewApi } from '@/api'
import { useQueryClient } from '@tanstack/react-query'

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
    setValue('updateName', props.user?.name ?? '')
    setValue('updateLastName', props.user?.lastName ?? '')
    setValue('updateEmail', props.user?.email ?? '')
    setValue('updateCountry', props.user?.country ?? '')
    setValue('updateCity', props.user?.city ?? '')
    setValue('updateAboutMe', props.user?.aboutMe ?? '')
    setValue('updateShortDescription', props.user?.shortDescription ?? '')
  }, [])

  const queryClient = useQueryClient()

  const onSubmit = async (data: UserSettingsFormType): Promise<void> => {
    try {
      const response = await CrewApi.put('userRoute/updateUserInfo', {
        ...data,
        id: props.user?.id,
      })
      void queryClient.invalidateQueries(['user', props.user?.id])
      console.log(response.data)
    } catch (error) {
      console.log('No se pudieron actualizar los datos', error)
    }
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
            {...register('updateName')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateName != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateName?.message ?? 'This field is required'}
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
            {...register('updateLastName')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateLastName != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateLastName?.message ?? 'This field is required'}
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
            {...register('updateEmail')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateEmail != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateEmail?.message ?? 'Please enter a valid email'}
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
            {...register('updateCountry')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateCountry != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateCountry?.message ?? 'This field is required'}
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
            {...register('updateCity')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateCity != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateCity?.message ?? 'This field is required'}
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
            {...register('updateAboutMe')}
            className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateAboutMe != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateAboutMe?.message ?? 'This field is required'}
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
            {...register('updateShortDescription')}
            className='h-20 w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateShortDescription != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateShortDescription?.message ??
                'This field is required'}
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
