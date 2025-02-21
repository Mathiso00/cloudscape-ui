import { tv } from 'tailwind-variants'

export const avatarVariant = tv({
  base: 'relative flex shrink-0 overflow-hidden',
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
    size: {
      '3xs': 'size-4 text-[8px]',
      '2xs': 'size-5 text-[10px]',
      'xs': 'size-6 text-xs',
      'sm': 'size-7 text-sm',
      'md': 'size-8 text-base',
      'lg': 'size-9 text-lg',
      'xl': 'size-10 text-xl',
      '2xl': 'size-11 text-[22px]',
      '3xl': 'size-12 text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface AvatarProps {
  alt: string
  src?: string
  shape?: 'circle' | 'square'
  size?: AvatarSize
}
export interface KoopsAvatarRootProps {
  size?: AvatarSize
  shape?: 'circle' | 'square'
}

export type AvatarSize = 'md' | '3xs' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl'
export function getAvatarText(text: string) {
  const initials = text
    .split(' ')
    .map(word => word.charAt(0))
    .join('')

  return initials.length > 2 ? initials.slice(0, 2) : initials
}
