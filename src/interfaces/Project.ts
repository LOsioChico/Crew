import { type IComment } from '.'

type Category = 'Tech & Innovation' | 'Creative Works' | 'Community Projects'

export interface IProject {
  id: string
  mainImage: string // nel
  images: string[] // nel
  title: string
  shortDescription: string
  description: string
  fundingCurrent: number
  fundingGoal: number
  fundingGoalReached: boolean
  fundingPercentage: number
  fundingDayLeft: number
  updates?: IUpdate[]
  category: Category
  creatorId: string
}

export interface IUpdate {
  id: string
  title: string
  description: string
  date: string
  comments: IComment[]
}

export interface ICreator {
  id: string
  firstName: string
  lastName: string
  avatar: string
}
