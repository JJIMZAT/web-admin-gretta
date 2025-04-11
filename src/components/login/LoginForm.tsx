'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import RememberToggle from './RememberToggle'
import Logo from '@/components/shared/Logo'

export default function LoginForm() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      usuario,
      password,
    })


    if (result?.ok) {
      router.push('/dashboard')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <form onSubmit={handleLogin} className="w-full h-full  px-[70px] py-[148px]">
      <Logo />
 
      <h1 className="text-[24px] font-[700] leading-[77px] tracking-[2.16px] font-kanit mt-[70px] ">Iniciar Sesión</h1>
      <p className="text-[19px] text-white mb-[56px] font-[400] tracking-[1.71px] font-kanit ">
        Bienvenido a Gretta!  Por favor, introduce<br/> tu documento de identidad y contraseña.
      </p>

      <div className='space-y-[16px] max-w-[426px]' >
        <Input
          label="Documento de Identidad"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          type="text"
          icon="/icons/icon-pencil.svg"
        />
        <Input
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          icon="/icons/icon-eyes.svg"
        />

        <RememberToggle value={remember} onChange={setRemember} />
      </div>
     
     <div className='mt-[43px] space-y-[24px] max-w-[426px]'>
  
        <Button fullWidth background="white" textColor="black">Olvidé mi contraseña</Button>

        <Button fullWidth type="submit" background="black" textColor="white">Iniciar sesión</Button>
     </div>
      
    </form>
  )
}
