import useSWRV from 'swrv'
import { userSchema } from './parser/user'
import { baseUrl } from './baseUrl'
import { computed, ref } from 'vue'
import { z } from 'zod'

export const useUser = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return userSchema.parse(data)
  }
  const userId = ref<string | null>(null)
  const { data, error } = useSWRV(
    () => userId.value && `${baseUrl}/api/users/${userId.value}`,
    fetcher
  )

  return {
    userId,
    user: data,
    error
  }
}

export const useUsers = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('API Error')
    }
    const data = await res.json()
    return z.array(userSchema).parse(data)
  }
  const { data: users, error } = useSWRV(
    () => `${baseUrl}/api/users`,
    fetcher,
    { ttl: 0 }
  )

  const userNameMap = computed(() => {
    const map = new Map()
    for (const user of users.value ?? []) {
      map.set(user.name, user)
    }
    return map
  })

  return {
    users,
    userNameMap,
    error
  }
}
