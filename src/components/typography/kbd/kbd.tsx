import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React, { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '@/utils'

export enum KbdVariant {
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',
  COMMAND = 'command',
  META = 'meta',
  SHIFT = 'shift',
  OPTION = 'option',
}

const kbdVariants = {
  [KbdVariant.ARROW_RIGHT]: 'i-material-symbols:keyboard-arrow-right',
  [KbdVariant.ARROW_LEFT]: 'i-material-symbols:keyboard-arrow-left',
  [KbdVariant.ARROW_UP]: 'i-material-symbols:keyboard-arrow-up',
  [KbdVariant.ARROW_DOWN]: 'i-material-symbols:keyboard-arrow-down',
  [KbdVariant.SHIFT]: 'i-material-symbols:shift-outline-rounded',
  [KbdVariant.OPTION]: 'i-material-symbols:keyboard-option-key',
  [KbdVariant.COMMAND]: 'i-material-symbols:keyboard-command-key',
  [KbdVariant.META]: 'i-material-symbols:keyboard-command-key',
}

export interface KbdProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  keys?: (KbdVariant | string)[]
  filled?: boolean
  onKeyCombination?: () => void
}

const kbdClasses = tv({
  base: 'select-none w-fit  h-5 flex font-sans items-center justify-center px-1.5 py-2 text-xs rounded-md',
  variants: {
    filled: {
      true: 'bg-secondary border border-white/10 text-white',
      false: 'bg-transparent border-none text-white/50',
    },
  },
})

const Kbd: React.FC<KbdProps> = ({ onKeyCombination, children, filled = true, keys = [], className }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const newPressed = new Set(prev)
        newPressed.add(event.key.toLowerCase())
        return newPressed
      })
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const newPressed = new Set(prev)
        newPressed.delete(event.key.toLowerCase())
        return newPressed
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    const normalizedCombination = keys.map(key =>
      key.toLowerCase() === 'command' ? 'meta' : key.toLowerCase(),
    )

    if (normalizedCombination.every(key => pressedKeys.has(key))) {
      onKeyCombination?.()
    }
  }, [pressedKeys, keys, onKeyCombination])

  return (
    <kbd className={cn(kbdClasses({ filled }), className)}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          {kbdVariants[key.toLowerCase() as KbdVariant]
            ? (
                <div className={cn('h-3 w-3 mr-0.5', kbdVariants[key.toLowerCase() as KbdVariant])} />
              )
            : (
                <span className="mr-0.5 capitalize">{key.toLowerCase()}</span>
              )}
        </React.Fragment>
      ))}
      {children}
    </kbd>
  )
}

export { Kbd }
