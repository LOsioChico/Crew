import { useState, useEffect } from 'react'
import { CrewApi } from '@/api'

interface IPayments {
  id: string
  userId: string
  status: string
  email: string
  orderId: number
  description: string
  firstName: string
  transactionAmount: number
  dateApproved: string
}

const userId = '65ee03d8-b480-44ac-9866-52e9333bef91'

export const Contributions: React.FC = () => {
  const [responseData, setResponseData] = useState<IPayments[] | null>(null)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await CrewApi.get(
          `/paymentRoute/info/getAllPaymentsFromOneUser?userId=${userId}`
        )
        setResponseData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Ocurrió un error al hacer la petición:', error)
      }
    }

    fetchData().catch((error) => {
      console.error('Ocurrió un error al obtener los datos:', error)
    })
  }, [])

  return (
    <div>
      {responseData !== null ? (
        <div className='flex flex-col'>
          {responseData.map((payment) => (
            <div
              key={payment.id}
              className='m-2 flex justify-between text-base'
            >
              <p>
                <span className='text-red-800'>project:</span>{' '}
                {payment.description}
              </p>
              <p>creator: {payment.firstName}</p>
              <p>mount: {payment.transactionAmount}</p>
              <p>date: {payment.dateApproved}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 className='mb-20 mt-16 flex w-full justify-center text-3xl font-semibold'>
          You have not contributed to any project yet!
        </h2>
      )}
    </div>
  )
}
