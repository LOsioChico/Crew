import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieProps {
  title: string
  labels: string[]
  data: number[]
  backgroundColor?: string[]
  width: string
}
export const PieChart: React.FC<PieProps> = ({
  title,
  labels,
  data,
  backgroundColor,
  width,
}) => {
  const info = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className={`flex h-auto ${width}`}>
      <Pie data={info} />
    </div>
  )
}
