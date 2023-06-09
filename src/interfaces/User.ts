import { type IProject } from '.'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  avatar: string
  projects: IProject[]
  date: string
}
