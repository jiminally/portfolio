export const about = {
  altitude: '120km',
  altitudeLabel: '대기권 진입',
  title: '탐사 일지',
  traits: [
    {
      label: 'SPEED',
      title: '느림, 대신 깊이',
      description:
        '오래 걸려도 바닥까지 파고들어요. 한 번 익힌 건 오래 남아요.',
    },
    {
      label: 'FUEL',
      title: '사람',
      description: '어디서든 편하게 섞이고, 함께할 때 더 멀리 가요.',
    },
    {
      label: 'MISSION',
      title: '불편을 줄이는 기술',
      description: '접근성과 건강처럼, 누군가의 하루를 덜 불편하게.',
    },
  ],
  equipmentTitle: '탑재 장비',
  equipmentLabel: 'TECH STACK',
  stack: [
    { category: 'BACKEND', technologies: ['채울 예정'] },
    {
      category: 'FRONTEND',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    { category: 'TOOLS', technologies: ['Git', 'GitHub'] },
  ],
} as const
