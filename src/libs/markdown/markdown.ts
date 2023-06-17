import type { Store, traQMarkdownIt } from '@traptitech/traq-markdown-it'
// import useChannelPath from '/@/composables/useChannelPath'
// import { embeddingOrigin } from '/@/lib/apis'
// import { useMeStore } from '/@/store/domain/me'
// import { useUsersStore } from '/@/store/entities/users'
// import { useChannelsStore } from '/@/store/entities/channels'
// import { useGroupsStore } from '/@/store/entities/groups'
// import { useStampsStore } from '/@/store/entities/stamps'
import { useStamps } from '/@/apis/stamp'

const storeProvider: Store = {
  getUser(_id) {
    // const { usersMap } = useUsersStore()
    // return usersMap.value.get(id)
    return undefined
  },
  getChannel(_id) {
    // const { channelsMap } = useChannelsStore()
    // return channelsMap.value.get(id)
    return undefined
  },
  getUserGroup(_id) {
    // const { userGroupsMap } = useGroupsStore()
    // return userGroupsMap.value.get(id)
    return undefined
  },
  getMe() {
    // const { detail } = useMeStore()
    // return detail.value
    return undefined
  },
  getStampByName(_name) {
    const { getStampByName } = useStamps()
    return getStampByName(_name)
  },
  getUserByName(_name) {
    // const { findUserByName } = useUsersStore()
    // return findUserByName(name)
    return undefined
  },
  generateChannelHref(_id) {
    // const { channelIdToLink } = useChannelPath()
    // return `${embeddingOrigin}${channelIdToLink(id)}`
    return ''
  },
  generateUserHref(_id) {
    // return `javascript:openUserModal(${encodeURIComponent(JSON.stringify(id))})`
    return ''
  },
  generateUserGroupHref(_id) {
    // return `javascript:openGroupModal(${encodeURIComponent(
    //   JSON.stringify(id)
    // )})`
    return ''
  }
}

let md: traQMarkdownIt
const loadMd = async () => {
  if (md) return
  const { traQMarkdownIt } = await import('./traq-markdown-it')
  md = new traQMarkdownIt(
    storeProvider,
    [],
    `${location.protocol}//${location.host}`
  )
}

const waitForInitialFetch = async () => {
  // const { usersMapInitialFetchPromise } = useUsersStore()
  // const { userGroupsMapInitialFetchPromise } = useGroupsStore()
  // const { bothChannelsMapInitialFetchPromise } = useChannelsStore()
  // const { stampsMapInitialFetchPromise } = useStampsStore()

  await Promise.all([
    // usersMapInitialFetchPromise,
    // userGroupsMapInitialFetchPromise,
    // bothChannelsMapInitialFetchPromise,
    // stampsMapInitialFetchPromise,
    loadMd()
  ])
}

export const render = async (text: string) => {
  await waitForInitialFetch()
  return md.render(text)
}

export const renderInline = async (text: string) => {
  await waitForInitialFetch()
  return md.renderInline(text)
}

export const parse = async (text: string) => {
  await waitForInitialFetch()
  return md.md.parse(text, {})
}
