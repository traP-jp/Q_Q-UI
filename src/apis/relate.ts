import useSWRV from 'swrv'
import { ref } from 'vue'
import { z } from 'zod'
import { baseUrl } from './baseUrl'
import { questionSchema } from './parser/question'

export const useRelated = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return z.array(questionSchema).parse(data)
  }

  const id = ref<string | null>(null)
  const { data, error } = useSWRV(
    // TODO: API先を修正する
    () => id.value && `${baseUrl}/api/questions/?q=${id.value}`,
    fetcher
  )

  return {
    id,
    questions: data,
    error
  }
}
