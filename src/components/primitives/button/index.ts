import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'inline-flex text-center shadow select-none gap-2.5 border border-transparent disabled:cursor-not-allowed items-center outline-transparent justify-center whitespace-nowrap transition-all ring-offset-2 ring-offset-inherit ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-white !text-secondary focus-visible:ring-white/10 focus-visible:ring-offset-transparent',
      outline: 'border-white/10 text-white bg-transparent hover:bg-white/5 focus-visible:ring-white/5 focus-visible:ring-offset-transparent',
      destructive: 'bg-red-800 text-white hover:bg-red-600 focus-visible:ring-red-600/20 focus-visible:ring-offset-transparent',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary/20 focus-visible:ring-offset-transparent',
      ghost: 'shadow-none hover:bg-neutral-800/10 bg-transparent hover:text-white/60 focus-visible:ring-transparent focus-visible:ring-offset-transparent',
      link: 'shadow-none text-white bg-transparent underline-offset-4 hover:underline focus-visible:ring-transparent focus-visible:ring-offset-transparent',
    },
    block: {
      true: 'w-full',
    },
    size: {
      default: 'h-37px px-3 rounded-lg !text-14px',
      lg: 'h-45px px-4 rounded-lg text-1.25rem',
      icon: 'h-37px w-37px rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
