import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React, { Children } from 'react'

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
}

const Kbd: React.FC<KbdProps> = ({ children, os }) => {
  const macOsSymbol = '⌘'

  const isAppleDevice = (): boolean => {
    if (os === 'macos')
      return true
    if (os === 'windows')
      return false
    return /Mac/.test(window.navigator.userAgent)
  }

  const combinations = Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      let modifiedChild = child.toUpperCase().replace(/ /g, ' + ')
      if (isAppleDevice()) {
        modifiedChild = modifiedChild.replace('CTRL', macOsSymbol)
      }
      return modifiedChild
    }
    return child
  })

  return (
    <kbd className="px-2 py-1.5 text-xs font-semibold text-zinc-50 bg-zinc-700 border border-zinc-600 rounded-md">
      {combinations}
    </kbd>
  )
}

export { Kbd }
