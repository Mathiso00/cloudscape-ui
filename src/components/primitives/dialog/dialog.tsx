import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { tv } from 'tailwind-variants'
import { cn } from '../../../utils'

const Dialog = DialogPrimitive.Root

const Trigger = DialogPrimitive.Trigger
Trigger.displayName = 'Trigger'
const Portal = DialogPrimitive.Portal
Portal.displayName = 'Portal'
const Close = DialogPrimitive.Close
Close.displayName = 'Close'
const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
Overlay.displayName = DialogPrimitive.Overlay.displayName

const contentVariants = tv({
  base: 'fixed left-[50%] top-[50%] z-50 grid  translate-x-[-50%] translate-y-[-50%] gap-4 border bg-neutral-800 border-neutral-700 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',
  variants: {
    size: {
      default: 'w-full max-w-lg ',
      sm: 'w-full max-w-sm',
      lg: 'w-full max-w-2xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
},
)

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    size?: 'default' | 'sm' | 'lg'
  }

>(({ className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        contentVariants({ size: props.size }),
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm  ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent ">
        <div className="i-mdi-close h-4 w-4 text-black" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </Portal>
))
Content.displayName = DialogPrimitive.Content.displayName

function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  )
}
Header.displayName = 'Header'

function Footer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  )
}
Footer.displayName = 'DialogFooter'

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
Title.displayName = DialogPrimitive.Title.displayName

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
Description.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  Portal,
  Overlay,
  Close,
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
}