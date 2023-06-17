import { z } from 'zod'
import { stampCountSchema } from './stamp'
import { answerSchema } from './answer'

export const questionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string(),
  responseNum: z.number(),
  favs: z.number(),
  done: z.boolean(),
  tags: z.array(z.string()),
  stamps: z.array(stampCountSchema),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Question = z.infer<typeof questionSchema>

export const questionDetailSchema = z.object({
  question: questionSchema,
  answers: z.array(answerSchema)
})
export type QuestionDetail = z.infer<typeof questionDetailSchema>
