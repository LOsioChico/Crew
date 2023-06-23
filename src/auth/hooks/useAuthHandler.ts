import { useUserIdStore } from '@/store'
import { isRegistered, supabase } from '@/utils'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface IUseAuth {
  session: boolean
  modalAuth: 'closed' | 'login' | 'register'
  setModalAuth: React.Dispatch<
    React.SetStateAction<'closed' | 'login' | 'register'>
  >
}

export const useAuthHandler = (): IUseAuth => {
  const [session, setSession] = useState(false)
  const [modalAuth, setModalAuth] = useState<'closed' | 'login' | 'register'>(
    'closed'
  )
  const location = useLocation().pathname
  const navigate = useNavigate()
  const { setUserId } = useUserIdStore()

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session != null) {
        setSession(true)
        setUserId(data.session.user.id)
      }
    })
  }, [setUserId])

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setSession(true)
        setModalAuth('closed')
        if (session?.user.app_metadata.provider?.includes('google') ?? false) {
          if (session?.user.id !== undefined)
            void isRegistered(session?.user.id)
        }
        if (session != null) setUserId(session.user.id)
      }
      if (event === 'SIGNED_OUT') {
        setSession(false)
        setUserId('')
      }
    })
  }, [setUserId])

  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session } }) => {
      if (location === '/project-form' && session === null) {
        setModalAuth('login')
        navigate('/')
      }
    })
  }, [location, navigate])

  return { session, modalAuth, setModalAuth }
}
