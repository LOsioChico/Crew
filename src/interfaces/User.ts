export interface IUser {
  id: string
  name: string
  lastName: string
  email: string
  country: string
  city: string
  postalCode: string
  shortDescription: string
  aboutMe: string
  avatar: string
  date: string
}

export interface IUserWithAvatar extends Omit<IUser, 'avatar'> {
  avatar: File
}
