export type TimelineKind = 'EDUCATION' | 'ACTIVITY' | 'CONTEST' | 'CAREER'

export type TimelineEntry = {
  when: string
  kind: TimelineKind
  title: string
  desc: string
}
