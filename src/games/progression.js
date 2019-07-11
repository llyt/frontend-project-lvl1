import { cons, car, cdr } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What number is missing in the progression?';

const getProgress = (start, length, diff, missingPosition) => {
  let missingElement;
  let result = '';
  for (let i = 0; i < length; i += 1) {
    let current = start + diff * i;
    if (i === missingPosition) {
      missingElement = current;
      current = '..';
    }
    result = `${result} ${current}`;
  }
  return cons(result, missingElement);
};

const generateQuestionAnswer = () => {
  const length = 12;
  const start = genRandInt(1, 100);
  const diffrence = genRandInt(1, 10);
  const missingPosition = genRandInt(0, length - 1);
  const progression = getProgress(start, length, diffrence, missingPosition);
  const question = car(progression);
  const answer = cdr(progression);
  return cons(question, String(answer));
};

export default () => engine(description, generateQuestionAnswer);
