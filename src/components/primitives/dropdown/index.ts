import { attachSubComponents } from '../../../utils/exports.ts'
import {
  CheckboxItem,
  Content,
  Group,
  Item,
  Label,
  Portal,
  Root,
  Separator,
  Shortcut,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from './dropdown.tsx'

export const Dropdown = attachSubComponents(
  'Dropdown',
  Root,
  {
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
  },
)
