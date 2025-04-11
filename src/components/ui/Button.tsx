import { clsx } from 'clsx'
import React from 'react'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  background?: 'orange' | 'black' | 'white' | 'gray'
  textColor?: 'white' | 'black' | 'orange'
  className?: string
}

const backgroundMap = {
  orange: 'bg-orange-500',
  black: 'bg-black',
  white: 'bg-white',
  gray: 'bg-gray-200',
}

const textColorMap = {
  white: 'text-white',
  black: 'text-black',
  orange: 'text-orange-500',
}

export default function Button({
  children,
  type = 'button',
  background = 'black',
  textColor = 'white',
  fullWidth = false,
  className = '',
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'py-[24px] px-[36px] rounded-full cursor-pointer transition font-kanit text-[18px] font-[600] leading-[20px] tracking-[0.045px]',
        backgroundMap[background],
        textColorMap[textColor],
        fullWidth && 'w-full',
        className
      )}
    >
      {children}
    </button>
  )
}
