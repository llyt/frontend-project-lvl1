import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What number is missing in the progression?';
const progressionLength = 12;

const getQuestion = (start, length, diff, missingElementPosition) => {
  let progression = '';
  for (let i = 0; i < length; i += 1) {
    let current = start + diff * i;
    if (i === missingElementPosition) {
      current = '..';
    }
    progression = `${progression} ${current}`;
  }
  return progression;
};

const generateQuestionAnswer = () => {
  const start = genRandInt(1, 100);
  const diffrence = genRandInt(1, 10);
  const missingElementPosition = genRandInt(0, progressionLength - 1);
  const question = getQuestion(start, progressionLength, diffrence, missingElementPosition);
  const answer = start + diffrence * missingElementPosition;
  return cons(question, String(answer));
};

export default () => engine(description, generateQuestionAnswer);
