export type Project = {
  id: string
  name: string
  tag: string
  summary: string
  period: string
  role: string
  stack: string[]
  color: string
  thumbnail?: string
  links: { github?: string; demo?: string }
}
