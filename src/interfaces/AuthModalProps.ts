import { type SetStateAction } from 'react'

export interface AuthModalProps {
  modalAuth: 'closed' | 'login' | 'register'
  setModalAuth: React.Dispatch<SetStateAction<AuthModalProps['modalAuth']>>
}

export interface LoginProps {
  setModalAuth: React.Dispatch<SetStateAction<AuthModalProps['modalAuth']>>
}

export interface RegisterProps {
  setModalAuth: React.Dispatch<SetStateAction<AuthModalProps['modalAuth']>>
}
