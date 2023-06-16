import { useProjects } from '@/hooks'
import { numberToUSD } from '@/utils'
import { useParams } from 'react-router-dom'
import { useProjectSplide } from './hooks/useProjectSplide'

export const Projects: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  useProjectSplide()
  const { projects } = useProjects()

  const projectDetail = projects?.find((project) => {
    if (id === undefined) return false
    return project.id === +id
  })

  if (projectDetail === undefined) {
    return (
      <div className='splide' id='projectSplide' role='group'>
        <div className='splide__track'>
          <ul className='splide__list'></ul>
        </div>
      </div>
    )
  }

  return (
    <div className='mb-4 flex h-[800px]'>
      <div className='mt-3 flex w-1/2 items-center justify-center'>
        <div className='splide' id='projectSplide' role='group'>
          <div className='splide__track'>
            <ul className='splide__list'>
              {projectDetail?.images?.map((image) => (
                <li
                  className='splide__slide flex items-center justify-center'
                  key={image}
                >
                  <img
                    src={image}
                    alt={image}
                    className='ml-20 h-full w-4/5 rounded-2xl object-cover'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='flex w-1/2 items-center justify-center bg-opacity-60'>
        <div
          className='flex flex-col gap-4 p-4'
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <p className='font-bold uppercase text-secondaryDark'>Funding</p>
          <h2 className='text-4xl font-bold'>
            {projectDetail.title}:{' '}
            <span>{projectDetail.shortDescription.slice(0, 20)}</span>
          </h2>
          <p className='text-xl'>{projectDetail.description.slice(0, 500)}</p>
          <div className='my-2 flex items-center'>
            <div className='flex items-center'>
              <img
                src={projectDetail.creator?.avatar}
                alt={projectDetail.creator?.id}
                className='h-12 w-12 rounded-full object-cover'
              />
              <div className='ml-2'>
                <h3 className='text-xl font-bold'>
                  {projectDetail.creator?.firstName}{' '}
                  {projectDetail.creator?.lastName}
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {numberToUSD(projectDetail.fundingCurrent)}
                </span>
                <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                  USD
                </p>
              </div>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {projectDetail.fundingPercentage}%
              </p>
            </div>

            <div className='relative pt-1'>
              <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                <div
                  style={{ width: `${projectDetail.fundingPercentage}%` }}
                  className='flex flex-col justify-center whitespace-nowrap bg-pink-300 text-center text-white shadow-none'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {projectDetail.fundingPercentage}% of{' '}
                {numberToUSD(projectDetail.fundingGoal)} goal
              </p>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {projectDetail.fundingDayLeft} days left to go{' '}
                {projectDetail.fundingDayLeft === 0 && '🎉'}
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <button className='flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'>
                Fund this project
              </button>
              <button className='flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'>
                <span className='material-symbols-outlined mr-1 text-sm'>
                  favorite
                </span>{' '}
                Follow
              </button>
            </div>
            <button className='flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'>
              <span className='material-symbols-outlined mr-1 text-sm'>
                share
              </span>{' '}
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
