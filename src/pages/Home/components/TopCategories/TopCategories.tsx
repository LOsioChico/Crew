import tecnologia from '../../../../assets/Iconos/chipUno.png'
import health from '../../../../assets/Iconos/corazon.png'
import entretenimiento from '../../../../assets/Iconos/peliculas.png'
import dataScience from '../../../../assets/Iconos/science.png'
import search from '../../../../assets/Iconos/search.png'
import logo from '../../../../assets/favicon.png'

export const TopCategories: React.FC = () => {
  return (
    <div className=' m-auto mt-8 flex h-[250px] w-full flex-col items-center justify-around '>
      <div className='mb-4 mt-0 box-border flex h-[125px] w-full justify-center   '>
        <div className='flex h-[125px] items-center justify-center '>
          <img src={logo} />
        </div>
        <div className='flex w-4/5 flex-col items-center justify-start p-5'>
          <h2 className='text-2xl font-bold '>
            Which categories interest you?
          </h2>
          <p className='text-center text-sm'>
            projects just for you and get great recommendations when .
          </p>
          <div className='mt-3 box-border flex w-1/2  justify-center gap-3   text-sm'>
            <button className=' rounded-sm  border-secondaryDark bg-secondaryDark px-3 py-1 uppercase text-white '>
              Sign Up
            </button>

            <button className='mr-0 rounded-sm border bg-white px-3 py-1 uppercase  text-black focus:bg-white focus:outline-none'>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className='flex h-[125px] w-[100%]  flex-row justify-center'>
        <div className='flex w-[100%] justify-center justify-items-stretch'>
          <ul className='flex justify-between p-0'>
            <li className='mx-4'>
              <div className='flex flex-col items-center justify-center'>
                <a href='#'>
                  <img
                    src={tecnologia}
                    className=' ml-auto mr-auto h-12 w-12'
                  ></img>
                  <span className='text-sm'>Technology</span>
                </a>
              </div>
            </li>

            <li className='mx-4'>
              <div className='flex flex-col items-center justify-center '>
                <a href='#'>
                  <img src={dataScience} className=' ml-0 mr-0 h-12 w-12'></img>
                  <span className='ml-2 mr-2 text-sm'>Science</span>
                </a>
              </div>
            </li>

            <li className='mx-4'>
              <div className='flex flex-col items-center justify-center '>
                <a href='#'>
                  <img
                    src={entretenimiento}
                    className=' ml-auto mr-auto h-12 w-12'
                  ></img>
                  <span className='text-sm'>Entertainment</span>
                </a>
              </div>
            </li>
            <li className='mx-4'>
              <div className='flex flex-col items-center justify-center'>
                <a href='#'>
                  <img
                    src={health}
                    className=' ml-auto mr-auto h-12 w-12'
                  ></img>
                  <span className='text-sm'>Healh & Wellness</span>
                </a>
              </div>
            </li>
            <li className='mx-4'>
              <div className='flex flex-col  items-center justify-center'>
                <a href='#'>
                  <img
                    src={search}
                    className=' ml-auto mr-auto h-12 w-12'
                  ></img>
                  <span className='ml-2 text-sm'>More</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// h-screen w-screen flex items-center justify-center
