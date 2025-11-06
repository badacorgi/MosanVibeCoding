import { Project } from './types';

// 여기에 학생들의 프로젝트 정보를 추가하거나 수정하세요.
// 썸네일과 링크를 추가하면 자동으로 웹페이지에 반영됩니다.
// 예시: 
// thumbnailUrl: 'thumb1.jpg', -> thumbnailUrl: '/path/to/your/thumb1.jpg',
// projectUrl: 'link1', -> projectUrl: 'https://your-project-link.com',

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '한붓그리기 퍼즐',
    description: '하나의 연속된 선으로 모든 점을 연결하는 퍼즐 게임입니다. 도전해보세요!',
    thumbnailUrl: '/thumb1.jpg', // Provided image uploaded for thumbnail
    projectUrl: 'https://famous-kitten-1bfb11.netlify.app/',
  },
  {
    id: 2,
    title: 'HunterCatcher',
    description: '흥미진진한 슈팅게임 적들을 물리치고 새로운 무기를 획득하세요',
    thumbnailUrl: '/thumb2.jpg', // 예: 'thumb2.jpg'
    projectUrl: 'https://profound-creponne-5fe9ca.netlify.app/',   // 예: 'link2'
  },
  {
    id: 3,
    title: '나만의 고양이 만들기',
    description: '나만의 고양이를 만들고 키우는 게임입니다.',
    thumbnailUrl: '/thumb3.jpg', // 예: 'thumb3.jpg'
    projectUrl: 'https://warm-taiyaki-48136b.netlify.app',   // 예: 'link3'
  },
  {
    id: 4,
    title: 'Project 4',
    description: '개발중...',
    thumbnailUrl: '/thumb4.jpg', // 예: 'thumb4.jpg'
    projectUrl: null,   // 예: 'link4'
  },
  {
    id: 5,
    title: 'Project 5',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb5.jpg'
    projectUrl: null,   // 예: 'link5'
  },
  {
    id: 6,
    title: 'Project 6',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb6.jpg'
    projectUrl: null,   // 예: 'link6'
  },
  {
    id: 7,
    title: 'Project 7',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb7.jpg'
    projectUrl: null,   // 예: 'link7'
  },
  {
    id: 8,
    title: 'Project 8',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb8.jpg'
    projectUrl: null,   // 예: 'link8'
  },
  {
    id: 9,
    title: 'Project 9',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb9.jpg'
    projectUrl: null,   // 예: 'link9'
  },
  {
    id: 10,
    title: 'Project 10',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb10.jpg'
    projectUrl: null,   // 예: 'link10'
  },
  {
    id: 11,
    title: 'Project 11',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb11.jpg'
    projectUrl: null,   // 예: 'link11'
  },
  {
    id: 12,
    title: 'Project 12',
    description: '개발중...',
    thumbnailUrl: null, // 예: 'thumb12.jpg'
    projectUrl: null,   // 예: 'link12'
  },
];
