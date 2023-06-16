import { type IProject } from '@/interfaces'
import { create } from 'zustand'

interface AuthModalState {
  state: 'login' | 'register' | 'closed'
  openLoginModal: () => void
  openRegisterModal: () => void
  closeAuthModal: () => void
}

export const useAuthModal = create<AuthModalState>((set) => ({
  state: 'closed',
  openLoginModal: () => {
    set({ state: 'login' })
  },
  openRegisterModal: () => {
    set({ state: 'register' })
  },
  closeAuthModal: () => {
    set({ state: 'closed' })
  },
}))

interface ProjectsState {
  projects: IProject[]
  setProjects: (projects: IProject[]) => void
}

export const useProjects = create<ProjectsState>((set) => ({
  projects: [],
  setProjects: (projects) => {
    set({ projects })
  },
}))
