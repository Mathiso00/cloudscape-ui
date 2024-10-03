import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

export const buttonVariant = tv({
  base: 'inline-flex text-center shadow select-none font-500 gap-2.5 border border-transparent disabled:cursor-not-allowed items-center outline-transparent justify-center whitespace-nowrap transition-all ring-offset-2 ring-offset-inherit ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
  variants: {
    variant: {
      'default': 'bg-#DE6449 text-white focus-visible:ring-[#DE6449]/10 focus-visible:ring-offset-transparent',
      'outline': 'border-white/10 text-white bg-transparent hover:bg-white/5 focus-visible:ring-white/5 focus-visible:ring-offset-transparent',
      'destructive': 'bg-red-800 text-white hover:bg-red-600 focus-visible:ring-red-600/20 focus-visible:ring-offset-transparent',
      'secondary': 'bg-secondary-950 text-white hover:bg-secondary-950/90 focus-visible:ring-secondary/20 focus-visible:ring-offset-transparent',
      'secondary-outline': 'border-white/10 text-white bg-secondary-950 hover:bg-secondary-950/90 focus-visible:ring-secondary/20 focus-visible:ring-offset-transparent',
      'ghost': 'shadow-none hover:bg-neutral-800/10 bg-transparent hover:text-white/60 focus-visible:ring-transparent focus-visible:ring-offset-transparent',
      'link': 'shadow-none text-white bg-transparent underline-offset-4 hover:underline focus-visible:ring-transparent focus-visible:ring-offset-transparent',
    },
    block: {
      true: 'w-full',
    },
    size: {
      default: 'h-37px px-3 rounded-lg !text-14px',
      lg: 'h-45px px-4 rounded-lg text-1.25rem',
      sm: 'h-30px px-2 rounded-lg text-13px',
      icon: 'h-37px w-37px rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps {
  variant?: 'default' | 'outline' | 'destructive' | 'secondary' | 'ghost' | 'link' | 'secondary-outline'
  size?: 'default' | 'lg' | 'icon' | 'sm'
  leftIcon?: string
  rightIcon?: string
  isLoading?: boolean
  block?: boolean
  disabled?: boolean
  icon?: string
  class?: HTMLAttributes['class']
}

export interface ButtonEmits {
  (e: 'click', data: MouseEvent): void
}
