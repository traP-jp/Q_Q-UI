// Title / 見出しを生成する
// とりあえず最初の行の不要文字を削除して返す
// TODO: だれか頼んだ！
export const generateTitle = (text: string) => {
  const title = text
    .replace(/\n/g, ' ')
    .replace(/#/g, '')
    .replace(/```/g, '`')
    .trim()
  return title.length > 0 ? title : '無題'
}
