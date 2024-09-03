import * as React from 'react'
import type { ButtonProps } from '../button/button.tsx'

interface ButtonGroupProps extends React.PropsWithChildren {
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
}

function ButtonGroup({ children, size, variant }: ButtonGroupProps) {
  return (
    <div className="flex flex-row ![&>*]:rounded-none ![&>*:first-child]:rounded-l-xl ![&>*:last-child]:rounded-r-xl">
      {React.Children.map(children, (child) => {
        return React.cloneElement(
          child as React.DetailedReactHTMLElement<any, HTMLElement>,
          {
            size,
            variant,
            className: 'not-last:border-r-none',
          },
        )
      })}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
