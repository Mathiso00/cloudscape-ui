import * as React from 'react'
import type { ButtonProps } from '../button/button.tsx'

interface ButtonGroupProps extends React.PropsWithChildren {
  size?: ButtonProps['size']
}

function ButtonGroup({ children, size }: ButtonGroupProps) {
  return (
    <div className="flex flex-row ![&>*]:rounded-none ![&>*:first-child]:rounded-l-md ![&>*:last-child]:rounded-r-md">
      {React.Children.map(children, (child) => {
        // @ts-expect-error ts/ban-ts-comment
        return React.cloneElement(child, { size })
      })}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
