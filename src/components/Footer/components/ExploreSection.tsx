import { Link } from 'react-router-dom'

export const ExploreSection: React.FC = () => {
  return (
    <div>
      <div className=' text-gray-500'>EXPLORE</div>
      <div>
        <div className='mt-3 flex flex-col'>
          <Link to='#' className='hover:underline'>
            What We Do
          </Link>
          <Link to='#' className='hover:underline'>
            Funding
          </Link>
        </div>
      </div>
    </div>
  )
}
