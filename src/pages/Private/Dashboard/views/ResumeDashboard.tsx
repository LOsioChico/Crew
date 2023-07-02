import { PieChart } from '../components/PieChart'
import { SelectDash } from '../components/SelectDash'
import BuildIcon from '@mui/icons-material/Build'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import { useDashboardMainInfo } from '../hooks/useDashboardMainInfo'
export const ResumeDashboard: React.FC = () => {
  const title = 'Funds ($)'
  const arrColor = [
    'rgba(193, 52, 82, 0.5)',
    'rgba(20, 146, 200, 0.5)',
    'rgba(86, 191, 73, 0.5)',
  ]
  const { mainInfo } = useDashboardMainInfo()
  const fundCommunty =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const fundCreative =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const fundTech =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const data = [fundTech * 5, fundCreative * 2, fundCommunty / 2]

  const funds =
    mainInfo?.totalFundsRaised != null
      ? Math.floor(mainInfo.totalFundsRaised / 1000)
      : 0
  const usersN = mainInfo?.allRegisteredUsers
  const projectsN = mainInfo?.activeProjects
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
        <div id='Contenedor' className='flex w-full justify-between text-white'>
          <div className='h-[310px] w-[310px] rounded-lg bg-backgroundDark3 p-5'>
            <LocalAtmIcon style={{ fontSize: 100, color: '#38b000' }} />
            <div className='pl-2.5'>
              <h1>Total Contributions</h1>
              <h1 className='text-xl'>
                $ {funds.toLocaleString(undefined, { useGrouping: true })} K
              </h1>
            </div>
          </div>
          <div>
            <div className='mb-2.5 h-[150px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <BuildIcon style={{ fontSize: 40, color: '#ff9410' }} />
              <h1>Total Projects</h1>
              <h1 className='text-xl'>{projectsN}</h1>
            </div>
            <div className='h-[150px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <PeopleOutlineIcon style={{ fontSize: 40, color: '#3a86ff' }} />
              <h1>Total Users</h1>
              <h1 className='text-xl'>{usersN}</h1>
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
