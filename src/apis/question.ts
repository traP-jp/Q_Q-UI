import useSWRV from 'swrv'
import { ref } from 'vue'
import {
  QuestionDetail,
  questionDetailSchema,
  questionSchema
} from './parser/question'
import { z } from 'zod'
import { baseUrl } from './baseUrl'

export const useQuestion = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return questionDetailSchema.parse(data)
  }
  const questionId = ref<string | null>(null)
  const { data, error } = useSWRV<QuestionDetail>(
    () => questionId.value && `${baseUrl}/api/questions/${questionId.value}`,
    fetcher
  )

  return {
    questionId,
    question: data,
    error
  }
}

export const useQuestions = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return z.array(questionSchema).parse(data)
  }

  const query = ref<string | null>(null)
  const { data, error } = useSWRV(
    () => query.value && `${baseUrl}/api/questions/?q=${query.value}`,
    fetcher
  )

  return {
    query,
    questions: data,
    error
  }
}
