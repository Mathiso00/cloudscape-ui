import * as React from 'react'

type KbdType = 'default' | 'macos' | 'windows'
export enum KbdVariant {
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',
}

export interface KbdProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  os?: KbdType
}

function Kbd({ children, os }: KbdProps) {
  const macOs = '⌘'

  function checkIfAppleDevice() {
    if (os === 'macos') {
      return true
    }

    if (os === 'windows') {
      return false
    }

    return window.navigator.userAgent.match(/Mac/) !== null
  }

  const combinations = React.Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      let modifiedChild = child.toUpperCase().replace(/ /g, ' + ')
      if (checkIfAppleDevice()) {
        modifiedChild = modifiedChild.replace('CTRL', macOs)
      }
      return modifiedChild
    }
    return child
  })

  return (
    <kbd
      className="px-2 py-1.5 text-xs font-semibold text-zinc-50 bg-zinc-700 border border-zinc-600 rounded-md"
    >
      {combinations}
    </kbd>
  )
}

export { Kbd }
