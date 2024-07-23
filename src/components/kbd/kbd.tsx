import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React, { Children } from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '../../utils'

type KbdType = 'default' | 'macos' | 'windows'

export enum KbdVariant {
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',
}

export interface KbdProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  os?: KbdType
  filled?: boolean
}

const kbdClasses = tv({
  base: 'select-none tracking-widest op-60 px-2 py-1.5 text-xs rounded-md',
  variants: {
    filled: {
      true: 'bg-zinc-700 border border-zinc-600 text-zinc-50 ',
      false: 'bg-transparent border-none text-zinc-700',
    },
  },
})

const Kbd: React.FC<KbdProps> = ({
  children,
  os = 'default',
  filled = true,
  className,
}) => {
  const macOsSymbol: string = '⌘'

  const isAppleDevice = (): boolean => {
    if (os === 'macos')
      return true
    if (os === 'windows')
      return false
    return /Mac/.test(window.navigator.userAgent)
  }

  const combinations = Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      let modifiedChild: string = child.toUpperCase()
      if (isAppleDevice()) {
        modifiedChild = modifiedChild.replace('CTRL', macOsSymbol)
      }
      return modifiedChild
    }
    return child
  })

  return (
    <kbd className={cn(kbdClasses({ filled }), className)}>
      {combinations}
    </kbd>
  )
}

export { Kbd }
