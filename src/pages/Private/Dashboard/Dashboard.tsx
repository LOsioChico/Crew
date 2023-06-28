// const sections = ['User', 'Project', 'Resume']
import { useState } from 'react'
import { DashboardItem } from './dashboardItem'

enum DashboardMenuOptions {
  User = 'User',
  Project = 'Project',
  Resume = 'Resume',
}
export const Dashboard: React.FC = () => {
  const [dashboardMenu, setDashboardMenu] = useState<DashboardMenuOptions>(
    DashboardMenuOptions.User
  )
  const handleOnClick = (option: DashboardMenuOptions): void => {
    setDashboardMenu(option)
  }

  return (
    <div>
      <div id='Main container' className='flex bg-backgroundDark2 p-5'>
        <div
          id='Sections'
          className='h-screen w-60 rounded-l-xl bg-backgroundDark3 p-5 font-semibold text-secondary'
        >
          <h2 className='mb-4 text-xl'>Sections</h2>
          <ul>
            <DashboardItem
              menuOption={DashboardMenuOptions.User}
              currentOption={dashboardMenu}
              onClick={handleOnClick}
            />
            <DashboardItem
              menuOption={DashboardMenuOptions.Project}
              currentOption={dashboardMenu}
              onClick={handleOnClick}
            />
            <DashboardItem
              menuOption={DashboardMenuOptions.Resume}
              currentOption={dashboardMenu}
              onClick={handleOnClick}
            />
          </ul>
        </div>
        <div className='h-screen border border-secondary'></div>
        <div
          id='section container'
          className='h-screen w-full rounded-r-xl bg-backgroundDark3 pl-10'
        >
          <h1>Section Container</h1>
        </div>
      </div>
    </div>
  )
}
