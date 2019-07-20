import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What number is missing in the progression?';
const progressionLength = 12;

const getProgression = (start, length, diff, missingPosition) => {
  let progression = '';
  for (let i = 0; i < length; i += 1) {
    let current = start + diff * i;
    if (i === missingPosition) {
      current = '..';
    }
    progression = `${progression} ${current}`;
  }
  return progression;
};

const getMissingElement = (start, length, diff, missingPosition) => {
  let missingElement;
  for (let i = 0; i < length; i += 1) {
    const current = start + diff * i;
    if (i === missingPosition) {
      missingElement = current;
    }
  }
  return missingElement;
};

const generateQuestionAnswer = () => {
  const start = genRandInt(1, 100);
  const diffrence = genRandInt(1, 10);
  const missingPosition = genRandInt(0, progressionLength - 1);
  const question = getProgression(start, progressionLength, diffrence, missingPosition);
  const answer = getMissingElement(start, progressionLength, diffrence, missingPosition);
  return cons(question, String(answer));
};

export default () => engine(description, generateQuestionAnswer);
