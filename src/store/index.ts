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
