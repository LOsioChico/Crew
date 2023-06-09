import { type IComment } from '.'

export interface IProject {
  id: string
  mainImage: string
  images: string[]
  title: string
  description: string
  fundingCurrent: number
  fundingGoal: number
  fundingGoalReached: boolean
  fundingPercentage: number
  fundingDaysLeft: number
  updates: IUpdate[]
  categories: string[]
  creator: ICreator
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
