import * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'
import { cn } from '@/utils'

const variantCardContent = tv({
  base: 'icon',
  variants: {
    icon: {
      default: 'i-mdi-chevron-down w-30px h-30px',

    },
    scndcontent: {
      default: 'i-mdi:play-box-outline w-30px h-30px',
      secondary: 'i-mdi:pause-box-outline ',
    },

  },

  defaultVariants: {
    icon: 'default',
  },
})

const CardRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variantCardContent>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `relative rounded-lg border bg-card text-card-foreground shadow-sm w-full`,
      className,
    )}
    {...props}
  />
))
CardRoot.displayName = 'Card'

const CardContent = React.forwardRef<
  HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variantCardContent>
>(({ className, icon, content, scndcontent, color, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-row justify-between', className)}
    {...props}
  >
    <div className="flex flex-row gap-10 items-center">

      <div style={{ width: '5px', height: '100%', marginLeft: '10px', backgroundColor: color, minHeight: '100px' }} />
      <div className={variantCardContent({ icon })} />
    </div>
    <div className="flex items-center mr-10">
      {content}
    </div>
    <div className="flex items-center mr-5">
      <div className={variantCardContent({ scndcontent })} />
    </div>
  </div>
))
CardContent.displayName = 'CardContent'

interface CardPlayProps {
  color: string
  content: string
  icon: 'default'
  scndcontent: 'default' | 'secondary'
}
function Card({ color, content, scndcontent, icon }: CardPlayProps) {
  return (
    <CardRoot style={{ borderColor: color }}>
      <CardContent icon={icon} content={content} color={color} scndcontent={scndcontent} />
    </CardRoot>
  )
}

export { Card, CardContent }
