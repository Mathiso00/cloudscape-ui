import * as React from 'react'
import { tv } from 'tailwind-variants'

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  size?: Size
  as?: As
  weight?: Weight
  truncate?: boolean
}

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Weight = 'light' | 'regular' | 'medium' | 'bold'

const headingClasses = tv({
  variants: {
    size: {
      1: 'text-12px leading-16px tracking-0.0025em',
      2: 'text-14px leading-20px',
      3: 'text-16px leading-24px',
      4: 'text-18px leading-26px -tracking-0.0025em',
      5: 'text-20px leading-28px -tracking-0.005em',
      6: 'text-24px leading-30px -tracking-0.00625em',
      7: 'text-28px leading-36px -tracking-0.0075em',
      8: 'text-35px leading-40px -tracking-0.01em',
      9: 'text-60px leading-60px -tracking-0.025em',
    },
    weight: {
      light: 'font-300',
      regular: 'font-400',
      medium: 'font-500',
      bold: 'font-700',
    },
    truncate: {
      true: 'truncate',
    },
  },
})

function Heading({
  size = 6,
  as = 'h4',
  weight = 'regular',
  truncate = false,
  children,
}: HeadingProps) {
  const Tag: As = as || `h${size}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Tag
      className={headingClasses({
        size,
        weight,
        truncate,
      })}
    >
      {children}
    </Tag>
  )
}

Heading.displayName = 'Heading'
export { Heading }
export type { Size, Weight }
