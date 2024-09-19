import { tv } from 'tailwind-variants'

export const avatarVariant = tv({
  base: 'relative flex shrink-0 overflow-hidden rounded-full',
  variants: {
    size: {
      default: 'h-10 w-10',
      sm: 'h-8 w-8',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface AvatarProps {
  alt: string
  src?: string
  size?: AvatarSize
}
export type AvatarSize = 'default' | 'sm' | 'lg' | 'xl'
