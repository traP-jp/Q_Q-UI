import { z } from 'zod'

export const stampCountSchema = z.object({
  id: z.string().uuid(),
  messageId: z.string().uuid(),
  count: z.number()
})

export type StampCount = z.infer<typeof stampCountSchema>
