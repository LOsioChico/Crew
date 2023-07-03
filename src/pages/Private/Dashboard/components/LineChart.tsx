import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface LineProps {
  title: string
  data: number[][]
  width: string
  fontSize: number
}

export const LineChart: React.FC<LineProps> = ({
  title,
  data,
  width,
  fontSize,
}) => {
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
        position: 'bottom' as const,
        labels: {
          font: {
            weight: 'bold',
            size: fontSize,
            padding: 30,
          },
        },
      },
      title: {
        display: false,
        text: title,
        position: 'bottom' as const,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: 'rgb(73, 80, 87, 0.25)',
        },
      },
      y: {
        display: true,
        grid: {
          color: 'rgb(73, 80, 87, 0.25)',
        },
      },
    },
  }

  return (
    <div className={`flex h-auto ${width}`}>
      <Line data={dataLine} options={options} />
    </div>
  )
}
