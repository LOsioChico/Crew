import { type IComment } from '.'

type Category =
  | 'Tecnologia e innovación'
  | 'Trabajos Creativos'
  | 'Proyectos Comunitarios'

export interface IProject {
  id: string
  mainImage: string
  images: string[]
  title: string
  shortDescription: string
  description: string
  fundingCurrent: number
  fundingGoal: number
  fundingGoalReached: boolean
  fundingPercentage: number
  fundingDaysLeft: number
  updates: IUpdate[]
  category: Category
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
