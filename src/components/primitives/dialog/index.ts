import { attachSubComponents } from '../../../utils/exports.ts'

import {
  Close,
  Content,
  Description,
  DialogHeader,
  Dialog as DialogPrimitive,
  Footer,
  Title,
  Trigger,
} from './dialog.tsx'

export const Dialog = attachSubComponents(
  'Dialog',
  DialogPrimitive,
  {
    Close,
    Content,
    Description,
    DialogHeader,
    Footer,
    Title,
    Trigger,
  },
)
