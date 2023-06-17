import { z } from 'zod'
import { stampCountSchema } from './stamp'

export const answerSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string(),
  favs: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  stamps: z.array(stampCountSchema)
})

export type Answer = z.infer<typeof answerSchema>
