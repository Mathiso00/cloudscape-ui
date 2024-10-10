import { tv } from 'tailwind-variants'

export const avatarVariant = tv({
  base: 'relative flex shrink-0 overflow-hidden',
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
    size: {
      default: 'h-10 w-10',
      md: 'h-9 w-9',
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
  shape?: 'circle' | 'square'
  size?: AvatarSize
}
export type AvatarSize = 'default' | 'sm' | 'lg' | 'xl' | 'md'
export function getAvatarText(text: string) {
  const initials = text
    .split(' ')
    .map(word => word.charAt(0))
    .join('')

  return initials.length > 2 ? initials.slice(0, 2) : initials
}
