export interface ListTypings {
  title: string
  content: any[]
  listType: 'image' | 'text'
  active: number
  updateActive: (val: number) => void
  scroll?: true
}