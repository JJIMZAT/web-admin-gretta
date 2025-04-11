// app/dashboard/page.tsx
'use client'

import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Cargando...</p>
  if (!session) return <p>No autorizado</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">¡Hola, {session.user.name}!</h1>
      <p>Rol: {session.user.rol}</p>
      <p>Email: {session.user.email}</p>
      <p>Token: {session.user.accessToken.slice(0, 30)}...</p>
    </div>
  )
}
