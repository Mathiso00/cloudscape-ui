import * as React from 'react'
import type { ButtonProps } from '../button/button.tsx'

interface ButtonGroupProps extends React.PropsWithChildren {
  size?: ButtonProps['size']
}

function ButtonGroup({ children, size }: ButtonGroupProps) {
  return (
    <div className="flex flex-row ![&>*]:rounded-none ![&>*:first-child]:rounded-l-xl ![&>*:last-child]:rounded-r-xl">
      {React.Children.map(children, (child) => {
        return React.cloneElement(
          child as React.DetailedReactHTMLElement<any, HTMLElement>,
          {
            size,
          },
        )
      })}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
