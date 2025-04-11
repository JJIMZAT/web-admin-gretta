// app/dashboard/layout.tsx
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      {children}
    </div>
  )
}