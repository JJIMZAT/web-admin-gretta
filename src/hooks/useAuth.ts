'use client'

import { useSession } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()

  const isAuthenticated = status === 'authenticated'
  const isLoading = status === 'loading'

  return {
    user: session?.user,
    token: session?.user?.accessToken,
    rol: session?.user?.rol,
    isAuthenticated,
    isLoading,
  }
}
