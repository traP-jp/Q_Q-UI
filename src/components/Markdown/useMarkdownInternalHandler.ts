import { toggleSpoiler } from '/@/lib/markdown/spoiler'

type HTMLElementTargetMouseEvent = MouseEvent & { target: HTMLElement }

export const useMarkdownInternalHandler = () => {
  const onClick = (event: MouseEvent) => {
    if (!event.target) return
    const e = event as HTMLElementTargetMouseEvent

    toggleSpoilerHandler(e)
  }

  const toggleSpoilerHandler = (event: HTMLElementTargetMouseEvent) => {
    if (!event.target) return
    toggleSpoiler(event.target)
  }

  return { onClick }
}
