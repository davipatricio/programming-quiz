import rawQuestions from '../data/questions.json';

export interface Question {
  title: string;
  alternatives: [string, string, string, string];
  correctAnswer: string;
}

export const questions = rawQuestions as Question[]
