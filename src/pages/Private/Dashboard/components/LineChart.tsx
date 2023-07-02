import { Line } from 'react-chartjs-2'

interface LineProps {
  title: string
  data: number[][]
  width: string
}

export const LineChart: React.FC<LineProps> = ({ title, data, width }) => {
  const labelsMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const dataLine = {
    labels: labelsMonth,
    datasets: [
      {
        label: 'Community Projects',
        data: data[0],
        borderColor: 'rgba(86, 191, 73)',
        backgroundColor: 'rgba(86, 191, 73)',
        fill: false,
      },
      {
        label: 'Creative Works',
        data: data[1],
        borderColor: 'rgba(20, 146, 200)',
        backgroundColor: 'rgba(20, 146, 200)',
        fill: false,
      },
      {
        label: 'Tech & Innovation',
        data: data[2],
        borderColor: 'rgba(193, 52, 82)',
        backgroundColor: 'rgba(193, 52, 82)',
        fill: false,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  }

  return (
    <div className={`flex h-auto ${width}`}>
      <Line data={dataLine} options={options} />
    </div>
  )
}
