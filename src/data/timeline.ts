import type { TimelineEntry } from '@/types/timeline'

export const timeline: TimelineEntry[] = [
  {
    when: '[기간]',
    kind: 'EDUCATION',
    title: '경희대학교 컴퓨터공학과',
    desc: '편입 · [졸업 예정 시기]',
  },
  {
    when: '[기간]',
    kind: 'ACTIVITY',
    title: '[동아리 · 대외활동명]',
    desc: '[역할 · 한 줄 설명]',
  },
  {
    when: '[연도]',
    kind: 'CONTEST',
    title: '배리어프리 앱 공모전 · Hearway',
    desc: '[결과]',
  },
  {
    when: '2026',
    kind: 'CONTEST',
    title: 'KHU AI 활용 경진대회',
    desc: '[결과]',
  },
]
