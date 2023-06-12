import { Link } from 'react-router-dom'

export const AboutSection: React.FC = () => {
  return (
    <div>
      <div className=' text-gray-500'>ABOUT</div>
      <div>
        <div className='mt-3 flex flex-col'>
          <Link to='#' className='hover:underline'>
            About Us
          </Link>
          <Link to='#' className='hover:underline'>
            Blog
          </Link>
          <Link to='#' className='hover:underline'>
            Trust & Safety
          </Link>
          <Link to='#' className='hover:underline'>
            Help & Support
          </Link>
          <Link to='#' className='hover:underline'>
            Press
          </Link>
          <Link to='#' className='hover:underline'>
            Careers
          </Link>
          <Link to='#' className='hover:underline'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
