import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'ml-consulting-site-j7ei06sa',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_BC_NmrcGvk20SLnUxf6IaSJgJNCw6x8U',
  authRequired: false,
  auth: { mode: 'managed' },
})
