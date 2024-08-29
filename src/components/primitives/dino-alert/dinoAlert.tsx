import * as React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
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

const DinoAlert = React.forwardRef<
  HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & { trianglePosition?: 'left' | 'center' | 'right' }
>(({ className, variant, trianglePosition = 'center', ...props }, ref) => {
  const triangleStyles = {
    left: 'left-4 transform translate-x-0',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-4 transform translate-x-0',
  }[trianglePosition]

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
      <div className={`absolute bottom-[-10px] ${triangleStyles} w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-inherit`}></div>
    </div>
  )
})
DinoAlert.displayName = 'Alert'
const DinoAlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
DinoAlertTitle.displayName = 'AlertTitle'

const DinoAlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
DinoAlertDescription.displayName = 'AlertDescription'

export { DinoAlert, DinoAlertTitle, DinoAlertDescription }
