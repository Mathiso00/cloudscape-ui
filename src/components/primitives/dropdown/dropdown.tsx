import * as React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { Kbd } from '../../typography/kbd'
import { cn } from '@/utils'

const Root = DropdownPrimitive.Root

const TriggerRoot = DropdownPrimitive.Trigger

const Group = DropdownPrimitive.Group

const Portal = DropdownPrimitive.Portal

const Sub = DropdownPrimitive.Sub

const Trigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <TriggerRoot
    ref={ref}
    className={
      cn(
        'focus:outline-none select-none bg-transparent',
        inset,
        className,
      )
    }
    {...props}
  >
    {children}
  </TriggerRoot>
))
Trigger.displayName = 'Trigger'

Group.displayName = 'Group'
Portal.displayName = 'Portal'
Sub.displayName = 'Sub'

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className={
      cn(
        'flex cursor-default select-none  items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-700 text-white data-[state=open]:bg-neutral-700',
        inset && 'pl-8',
        className,
      )
    }
    {...props}
  >
    {children}
    <div className="i-mdi-chevron-right ml-auto h-4 w-4" />
  </DropdownPrimitive.SubTrigger>
))
SubTrigger.displayName = 'SubTrigger'

const SubContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className={
      cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-neutral-800 border-neutral-700 p-1 text-white font-inter data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )
    }
    {...props}
  />
))
SubContent.displayName = 'SubContent'

const Content = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={
        cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-neutral-800 border-neutral-700 p-1 text-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )
      }
      {...props}
    />
  </DropdownPrimitive.Portal>
))
Content.displayName = 'Content'

const Item = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={
      cn(
        'relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors text-white focus:bg-neutral-700 focus:text-white/80 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )
    }
    {...props}
  />
))
Item.displayName = 'Item'

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className={
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-white/80 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )
    }
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <div className="i-mdi-check h-4 w-4" />
      </DropdownPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownPrimitive.CheckboxItem>
))
CheckboxItem.displayName = 'CheckboxItem'

const Label = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={
      cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className,
      )
    }
    {...props}
  />
))
Label.displayName = 'Label'

const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={
      cn('-mx-1 my-1 h-px bg-neutral-700', className)
    }
    {...props}
  />
))
Separator.displayName = 'Separator'

function Shortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <Kbd
      filled={false}
      className="ml-auto"
      keys={props.children?.toString().split('+') || []}
    />
  )
}
Shortcut.displayName = 'Shortcut'

export {
  Root,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  Label,
  Separator,
  Shortcut,
  Group,
  Portal,
  Sub,
  SubContent,
  SubTrigger,
}
