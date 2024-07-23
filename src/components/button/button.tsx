import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { cn } from '../../utils'

const buttonVariants = tv({
  base: 'inline-flex select-none disabled:cursor-not-allowed items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-black text-white hover:bg-primary/90',
      destructive:
          'bg-red-700 text-red-50 hover:bg-red-700/90',
      outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent bg-transparent hover:text-accent-foreground',
      link: 'text-primary bg-transparent underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 px-4 rounded-md py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: string
  isLoading?: boolean
  icon?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'default',
    size = 'default',
    leftIcon,
    isLoading = false,
    disabled = false,
    asChild = false,
    icon,
    children,
    ...props
  }: ButtonProps, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={
          cn(
            buttonVariants({ variant, size, className }),
          )
        }
        ref={ref}
        {...props}
        onClick={(e) => {
          if (isLoading) {
            e.preventDefault()
            e.stopPropagation()
            return
          }
          props.onClick?.(e)
        }}
        disabled={disabled}
      >
        {
          isLoading
            ? (
                <div className="i-svg-spinners:ring-resize mr-2" />
              )
            : (
                leftIcon && (
                  <div className={`mr-2 ${leftIcon}`} />
                )
              )
        }

        {
          icon
            ? (
                <div className={`text-xl ${icon}`} />
              )
            : children
        }
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
