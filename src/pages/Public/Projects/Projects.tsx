import { numberToUSD } from '@/utils'
import { useParams } from 'react-router-dom'
import { FavoriteButton, ProjectAvatar, ProjectSlider } from './components'
import { useProjectById } from './hooks'

interface UserParams {
  id: string
}

export const Projects: React.FC = () => {
  const { id } = useParams<keyof UserParams>() as UserParams
  const { project } = useProjectById(id)

  if (project === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div className='m-12 flex h-[800px]'>
      <ProjectSlider project={project} />

      <div className='flex w-2/5 items-center justify-center bg-opacity-60'>
        <div
          className='flex flex-col gap-4 p-4'
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <p className='font-bold uppercase text-secondaryDark'>Funding</p>
          <h2 className='text-4xl font-bold'>
            {project.title}:{' '}
            <span>{project.shortDescription.slice(0, 20)}</span>
          </h2>
          <p className='text-xl'>{project.description.slice(0, 500)}</p>
          <div className='my-2 flex items-center'>
            <div className='flex items-center'>
              <ProjectAvatar creatorId={project.creatorId} />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {numberToUSD(project.fundingCurrent)}
                </span>
                <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                  USD
                </p>
              </div>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {project.fundingPercentage}%
              </p>
            </div>

            <div className='relative pt-1'>
              <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                <div
                  style={{ width: `${project.fundingPercentage}%` }}
                  className='flex flex-col justify-center whitespace-nowrap bg-pink-300 text-center text-white shadow-none'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {project.fundingPercentage}% of{' '}
                {numberToUSD(project.fundingGoal)} goal
              </p>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {project.fundingDayLeft} days left to go{' '}
                {project.fundingDayLeft === 0 && '🎉'}
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <button className='flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'>
                Fund this project
              </button>
              <FavoriteButton projectId={project.id} />
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