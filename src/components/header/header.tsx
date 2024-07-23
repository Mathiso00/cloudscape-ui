import { type VariantProps, tv } from 'tailwind-variants'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils'
import { Avatar } from '../avatar'

const headerVariant = tv({
  base: 'flex items-center justify-between h-16 px-4 bg-black text-white w-full',
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
      sm: '',
      lg: '',
      icon: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof headerVariant> {
  asChild?: boolean
  leftIcon?: string
  isLoading?: boolean
  icon?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    className,
    variant,
    size,
    leftIcon,
    isLoading,
    asChild = false,
    icon,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'header'
    return (
      <Comp
        className={cn(headerVariant({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            Dashboard
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Quests
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Challenges
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Lessons
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          {/* <Badge variant="default" className="bg-green-200 text-black flex items-center space-x-2"> */}
          {/*  <span>VPN connected</span> */}
          {/*  <WifiIcon className="h-4 w-4" /> */}
          {/* </Badge> */}
          <Avatar alt="DP">

          </Avatar>
        </div>
      </Comp>
    )
  },
)

Header.displayName = 'Header'

export { Header, headerVariant }
