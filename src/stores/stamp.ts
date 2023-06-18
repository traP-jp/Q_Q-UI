import { defineStore } from 'pinia'
import { ref } from 'vue'
import { TraQStamp, traQStampSchema } from '/@/apis/parser/stamp'
import { z } from 'zod'
import { baseUrl } from '/@/apis/baseUrl'

export const useStampsStore = defineStore('/pinia/stamps', () => {
  const stampsMap = ref(new Map<string, TraQStamp>())
  const isLoading = ref(false)
  const stampFetcher = async () => {
    const url = `${baseUrl}/api/stamps`
    if (stampsMap.value.size > 0 || isLoading.value) {
      return stampsMap.value
    }
    isLoading.value = true

    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    const checked = z.array(traQStampSchema).parse(data)
    const map = new Map<string, TraQStamp>()
    checked.forEach(stamp => {
      map.set(stamp.name, stamp)
    })
    stampsMap.value = map
    isLoading.value = false
    return map
  }

  const getStampByName = (name: string) => {
    return stampsMap.value.get(name)
  }

  return {
    stampsMap,
    stampFetcher,
    getStampByName
  }
})
