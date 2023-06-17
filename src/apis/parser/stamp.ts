import { z } from 'zod'

export const stampCountSchema = z.object({
  id: z.string().uuid(),
  messageId: z.string().uuid(),
  count: z.number()
})

export const traQStampSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  fileId: z.string().uuid(),
  isUnicord: z.boolean()
})

export type StampCount = z.infer<typeof stampCountSchema>
export type TraQStamp = z.infer<typeof traQStampSchema>
