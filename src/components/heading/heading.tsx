import * as React from 'react'
import { tv } from 'tailwind-variants'

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  // type: 'text' | 'code' | 'emphasis' | 'strong'
}

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
  },
})

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h6', 'h6', 'h6'] as const

function Heading({ size = 6, weight = 'regular', children }: HeadingProps) {
  const Tag = Array.from(headings).reverse()[size - 1]

  return (
    <Tag
      className={headingClasses({
        size,
        weight,
      })}
    >
      {children}
    </Tag>
  )
}

Heading.displayName = 'Heading'
export { Heading }
