import useSWRV from 'swrv'
import { ref } from 'vue'
import { z } from 'zod'
import { baseUrl } from './baseUrl'
import { questionSchema } from './parser/question'

export const useRecommend = () => {
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
    () =>
      query.value !== null && query.value.length === 0
        ? `${baseUrl}/api/questions/`
        : `${baseUrl}/api/questions/?q=${query.value}`,
    fetcher
  )

  return {
    query,
    questions: data,
    error
  }
}
