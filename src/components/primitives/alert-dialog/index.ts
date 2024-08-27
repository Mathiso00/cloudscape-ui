import {
  Action,
  AlertDialog as AlertDialogPrimitive,
  Cancel,
  Content,
  Description,
  Footer,
  Header,
  Title,
  Trigger,
} from './alert-dialog'
import { attachSubComponents } from '@/utils/exports.ts'

export const AlertDialog = attachSubComponents(
  'AlertDialog',
  AlertDialogPrimitive,
  {
    Action,
    Cancel,
    Content,
    Description,
    Footer,
    Header,
    Title,
    Trigger,
  },
)
