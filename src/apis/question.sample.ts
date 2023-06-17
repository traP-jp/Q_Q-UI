import { QuestionDetail, Question } from './parser/question'

export const sampleQuestions: Question[] = [
  {
    id: 'ee5287c0-10b1-4c14-afa0-de007c801faf',
    userId: '7dc2a2b3-f57b-4f69-8324-7d89dc677c43',
    content: '今日のご飯は何がいいですか？',
    responseNum: 2,
    favs: 2,
    done: false,
    tags: ['食事', '今日のご飯'],
    stamps: [],
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z'
  },
  {
    id: 'ee5287c0-10b1-4c14-afa0-de007c801faf',
    userId: '7dc2a2b3-f57b-4f69-8324-7d89dc677c43',
    content: '今日のご飯は何がいいですか？',
    responseNum: 2,
    favs: 2,
    done: false,
    tags: ['食事', '今日のご飯'],
    stamps: [],
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z'
  }
]

export const sampleQuestionDetails: QuestionDetail = {
  question: {
    id: 'ee5287c0-10b1-4c14-afa0-de007c801faf',
    userId: '7dc2a2b3-f57b-4f69-8324-7d89dc677c43',
    content: '今日のご飯は何がいいですか？',
    responseNum: 2,
    favs: 2,
    done: false,
    tags: ['食事', '今日のご飯'],
    stamps: [
      {
        id: 'ee5287c0-10b1-4c14-afa0-de007c801faf',
        message_id: 'ee5287c0-10b1-4c14-afa0-de007c801faf',
        count: 2
      }
    ],
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z'
  },
  answers: [
    {
      id: '003aa85f-44e1-4a22-b4e4-45b1207dd9cc',
      userId: '7dc2a2b3-f57b-4f69-8324-7d89dc677c43',
      content: 'カレーがいいです',
      favs: 2,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      stamps: []
    },
    {
      id: '4ebc8527-b18a-4ce1-b135-09e509dd1b66',
      userId: '7dc2a2b3-f57b-4f69-8324-7d89dc677c43',
      content: 'カレーがいいです',
      favs: 2,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      stamps: []
    }
  ]
}
