import { z } from 'zod'
import { traQStampSchema } from './parser/stamp'
import useSWRV from 'swrv'
import { baseUrl } from './baseUrl'

export const useStamps = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return z.array(traQStampSchema).parse(data)
  }
  const { data: stamps, error } = useSWRV(`${baseUrl}/api/stamps`, fetcher)

  const getStampByName = (name: string) => {
    if (!stamps || !stamps.value) return undefined
    return stamps.value.find(s => s.name === name)
  }

  return {
    stamps,
    error,
    getStampByName
  }
}
