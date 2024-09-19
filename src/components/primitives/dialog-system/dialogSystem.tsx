import * as React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import dino from '@/asset/dino.svg'
import { cn } from '@/utils'

const alertVariants = tv({
  base:
          'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
},
)

const DialogSystem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  & { trianglePosition?: 'left' | 'center' | 'right' }
  & { SvgPosition?: 'left' | 'center' | 'right' | 'otherLeft' | 'otherRight' }
  & { inverseSvg?: boolean }
>(({ className, variant = 'default', trianglePosition = 'center', SvgPosition = 'center', inverseSvg = false, ...props }, ref) => {
  const triangleStyles = {
    left: 'left-4 transform translate-x-0',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-4 transform translate-x-0',
  }[trianglePosition]

  const SvgStyles = {
    right: 'items-end',
    center: 'items-center',
    left: 'right-4',
    otherLeft: 'flex-row items-start',
    otherRight: 'flex-row-reverse items-start',
  }[SvgPosition]

  const triangleColorClass = variant === 'destructive' ? 'border-t-destructive' : 'border-t-inherit'

  return (
    <div className={`flex ${SvgPosition === 'otherLeft' ? SvgPosition : SvgPosition === 'otherRight' ? 'flex-row-reverse' : 'flex-col-reverse'} justify-center ${SvgStyles}`}>
      <img
        src={dino}
        alt="Dino"
        className={`w-40 h-40 ${inverseSvg ? 'transform scale-x-[-1]' : ''}`}
      />
      <div className="relative w-full">
        <div
          ref={ref}
          role="alert"
          className={cn(alertVariants({ variant }), className)}
          {...props}
        />
        <div
          className={`absolute bottom-[-10px] ${triangleStyles} w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] ${triangleColorClass}`}
        />
      </div>
    </div>
  )
})
DialogSystem.displayName = 'Alert'

const DialogSystemTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
DialogSystemTitle.displayName = 'AlertTitle'

const DialogSystemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed ', className)}
    {...props}
  />
))
DialogSystemDescription.displayName = 'AlertDescription'

export { DialogSystem, DialogSystemTitle, DialogSystemDescription }
