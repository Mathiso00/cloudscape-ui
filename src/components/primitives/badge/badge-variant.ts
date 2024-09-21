import { tv } from 'tailwind-variants'

export interface KoopsBadgeProps {
  /**
   * The variant of the badge
   */
  variant: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'white'
  /**
   * Multiple sizes are available for badges
   */
  size?: 'xs' | 'sm' | 'md'
  /**
   * Whether the badge is outlined
   */
  outlined?: boolean
  /**
   * The default slot
   */
  content?: string
}

export const badgeVariant = tv({
  base: 'inline-flex items-center justify-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      white: 'bg-white text-black border-white/10',
      primary: 'bg-secondary text-white border-white/10',
      success: 'bg-green-700 text-white border-green-500/40',
      danger: 'bg-red-800 text-white border-red-600/40',
      warning: 'bg-yellow-700 text-white border-yellow-500/40',
      info: 'bg-sky-600 text-white border-sky-400/40',
    },
    size: {
      xs: 'px-1.5 py-0.5 text-xs h-6',
      sm: 'px-2 py-1 text-sm h-7',
      md: ' px-2.5 py-1.5 text-sm h-8',
    },
    outlined: {
      true: 'border',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      class: 'border-secondary bg-transparent',
    },
    {
      variant: 'success',
      outlined: true,
      class: 'border-green-700 bg-transparent text-green-600',
    },
    {
      variant: 'danger',
      outlined: true,
      class: 'border-red-800 bg-transparent text-red-700',
    },
    {
      variant: 'warning',
      outlined: true,
      class: 'border-yellow-700 bg-transparent text-yellow-600',
    },
    {
      variant: 'info',
      outlined: true,
      class: 'border-sky-600 bg-transparent text-sky-500',
    },
    {
      variant: 'white',
      outlined: true,
      class: 'border-white bg-transparent text-white',
    },
  ],
})
