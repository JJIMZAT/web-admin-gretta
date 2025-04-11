// app/login/layout.tsx
import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      {children}
    </div>
  )
}
