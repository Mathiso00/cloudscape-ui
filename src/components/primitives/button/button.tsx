import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { cn } from '../../../utils'

const buttonVariants = tv({
  base: 'inline-flex select-none disabled:cursor-not-allowed items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-neutral-800 transition-all focus-visible:outline-none data-[focus]:ring-2 data-[focus]:ring-ring data-[focus]:ring-offset-2  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-white text-primary-foreground hover:bg-primary/90',
      destructive:
                'bg-red-700 text-red-50 hover:bg-red-700/90 !ring-red-700',
      outline:
                'border border-neutral-700 hover:bg-neutral-700 focus-visible:ring-neutral-700 bg-transparent hover:text-accent-foreground',
      secondary:
                'bg-secondary text-secondary-foreground hover:bg-secondary/50 !ring-secondary',
      ghost: 'hover:bg-accent bg-transparent hover:text-accent-foreground !ring-accent',
      link: 'text-primary bg-transparent underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 px-4 rounded-xl py-2',
      sm: 'h-9 rounded-xl px-3',
      lg: 'h-11 rounded-xl px-8',
      icon: 'h-10 w-10 rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
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

/**
 * Button component that can be used to trigger actions. It can be customized with different variants and sizes.
 */
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