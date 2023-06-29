import { PieChart } from '../components/PieChart'
import { SelectDash } from '../components/SelectDash'
import PaidIcon from '@mui/icons-material/Paid'
export const ResumeDashboard: React.FC = () => {
  const title = 'Resumeeee'
  const arrColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
  ]
  const data = [50, 19, 3]

  return (
    <div className='flex'>
      <div className='h-fit w-[495px] rounded-lg bg-backgroundDark1 p-3 '>
        <div className='flex h-12 items-center'>
          <div className='flex-1 pb-2 text-white'>
            <h1 className='text-xl'>Title </h1>
            <h1 className='text-sm font-thin'>Something</h1>
          </div>
          <SelectDash />
        </div>
        <div id='Contenedor' className='flex w-full justify-between'>
          <div className='h-[310px] w-[310px] rounded-lg bg-backgroundDark3 p-10'>
            <PaidIcon />
            <h1>Total Fund</h1>
          </div>
          <div>
            <div className='mb-2.5 h-[150px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <PaidIcon />
              <h1>Total Projects</h1>
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <PaidIcon />
              <h1>Total Users</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[600px]'>
        <PieChart
          title={title}
          labels={['Tech & Innovation', 'Creative Works', 'Community Projects']}
          data={data}
          backgroundColor={arrColor}
          width={'w-[400px]'}
        />
      </div>
    </div>
  )
}
