import { attachSubComponents } from '../../../utils/exports.ts'

import {
  Close,
  Content,
  Description,
  Dialog as DialogPrimitive,
  Footer,
  Header,
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
    Header,
    Footer,
    Title,
    Trigger,
  },
)
