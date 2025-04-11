// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import AuthSessionProvider from '@/app/providers/SessionProvider'



export const metadata: Metadata = {
  title: 'Gretta Admin',
  description: 'Sistema de gestión para guías de remisión electrónica',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-black">
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  )
}
