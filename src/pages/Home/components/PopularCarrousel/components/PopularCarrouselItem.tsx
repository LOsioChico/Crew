import { type PopularCarrouselProject } from '@/data'
import { numberToUSD } from '@/utils'

interface PopularCarrouselItemProps {
  project: PopularCarrouselProject
}

export const PopularCarrouselItem: React.FC<PopularCarrouselItemProps> = ({
  project,
}) => {
  return (
    <li className='splide__slide py-8'>
      <div className='group absolute flex h-full cursor-pointer flex-col rounded-2xl border shadow-md duration-300 hover:scale-105 hover:shadow-xl'>
        <div className='h-1/2'>
          <img
            className='h-full w-full rounded-t-2xl object-cover '
            src={project.mainImage}
            alt={project.title}
          />
        </div>
        <div className='mx-4 mt-4'>
          <div className='flex justify-between'>
            <p className='text-sm font-bold uppercase text-secondaryDark'>
              Funding
            </p>
            <span className='material-symbols-outlined text-secondary duration-300 hover:scale-105 hover:text-pink-300 active:scale-95'>
              favorite
            </span>
          </div>
          <div>
            <h3 className='mb-1 mt-2 text-xl font-semibold duration-1000'>
              {project.title}
            </h3>
            <p className='text-sm'>
              {project.description.length > 99
                ? project.description.slice(0, 99).concat('...')
                : project.description}
            </p>
          </div>
          <div className='my-2'>
            {project.categories.map((category) => (
              <span
                key={category}
                className='mr-2 mt-2 inline-block rounded-full bg-secondaryDark px-2 py-1 text-xs font-semibold text-white duration-300 hover:scale-110'
              >
                {category}
              </span>
            ))}
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {numberToUSD(project.fundingCurrent)}
                </span>
                <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                  USD raised
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
          </div>

          <div>
            <div className='flex items-center justify-end'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {project.fundingDaysLeft}
                </span>
                <p className='ml-1 text-xs font-semibold uppercase text-gray-500'>
                  Days left
                </p>
              </div>
              <span className='material-symbols-outlined ml-2 text-secondaryDark'>
                schedule
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
