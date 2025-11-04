// Sample data for the course
export const AptitudeData = {
  title: 'Proceedings of Mock Tests',
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: 'Introduction to Mock Tests',
      isCompleted: true,
      video: {
        id: 'v1',
        title: 'Chapter 1 Video Lecture',
        duration: '45 minutes',
        isCompleted: true,
      },
      mockTest: {
        id: 'mt1',
        title: 'Chapter 1 Assessment',
        isCompleted: true,
        resultAvailable: true,
        score: '85%',
      },
    },
    {
      id: 'ch2',
      number: 2,
      title: 'Practice Fundamentals',
      isCompleted: false,
      video: {
        id: 'v2',
        title: 'Chapter 2 Video Lecture',
        duration: '52 minutes',
        isCompleted: true,
      },
      mockTest: {
        id: 'mt2',
        title: 'Chapter 2 Assessment',
        isCompleted: false,
        resultAvailable: false,
      },
    },
    {
      id: 'ch3',
      number: 3,
      title: 'Advanced Concepts',
      isCompleted: false,
      video: {
        id: 'v3',
        title: 'Chapter 3 Video Lecture',
        duration: '38 minutes',
        isCompleted: false,
      },
      mockTest: {
        id: 'mt3',
        title: 'Chapter 3 Assessment',
        isCompleted: false,
        resultAvailable: false,
      },
    },
    {
      id: 'ch15',
      number: 15,
      title: 'Final Assessment',
      isCompleted: false,
      video: {
        id: 'v15',
        title: 'Chapter 15 Video Lecture',
        duration: '65 minutes',
        isCompleted: false,
      },
      mockTest: {
        id: 'mt15',
        title: 'Final Mock Test',
        isCompleted: false,
        resultAvailable: false,
      },
    },
  ],
};
