import { create } from 'zustand'

interface IUserIdStore {
  userId: string
  setUserId: (userId: string) => void
}

export const useUserIdStore = create<IUserIdStore>((set) => ({
  userId: '',
  setUserId: (userId: string) => {
    set({ userId })
  },
}))
