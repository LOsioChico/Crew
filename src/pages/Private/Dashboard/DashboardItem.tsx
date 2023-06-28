enum DashboardMenuOptions {
  User = 'User',
  Project = 'Project',
  Resume = 'Resume',
}

interface DashboardItemProps {
  menuOption: DashboardMenuOptions
  currentOption: DashboardMenuOptions
  onClick: (option: DashboardMenuOptions) => void
}

export const DashboardItem: React.FC<DashboardItemProps> = ({
  menuOption,
  currentOption,
  onClick,
}) => {
  const isSelected = menuOption === currentOption

  return (
    <div className='flex-none'>
      <button
        className={`my-1 w-52 rounded-md py-2 pl-4 text-start ${
          isSelected ? 'rounded-md bg-secondary text-backgroundDark3' : ''
        }`}
        onClick={() => {
          onClick(menuOption)
        }}
      >
        {menuOption}
      </button>
    </div>
  )
}
