import { Link } from 'react-router-dom'

export const EntrepreneursSection: React.FC = () => {
  return (
    <div>
      <div className='text-gray-500'>ENTREPRENEURS</div>
      <div>
        <div className='mt-3 flex flex-col'>
          <Link to='#' className='hover:underline'>
            How It Works
          </Link>
          <Link to='#' className='hover:underline'>
            Education Center
          </Link>
          <Link to='#' className='hover:underline'>
            Experts Directory
          </Link>
          <Link to='#' className='hover:underline'>
            Fees
          </Link>
          <Link to='#' className='hover:underline'>
            Enterprise
          </Link>
          <Link to='#' className='hover:underline'>
            China
          </Link>
        </div>
      </div>
    </div>
  )
}
