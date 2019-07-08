import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What number is missing in the progression?';

let missingNumber;

const genProgress = (startNum, qnt) => {
  const diff = genRandInt(1, 10);
  const positionOfMissingNumber = genRandInt(0, qnt - 1);
  let result = '';
  for (let i = 0; i < qnt; i += 1) {
    let nextSymbol = startNum + diff * i;
    if (i === positionOfMissingNumber) {
      missingNumber = nextSymbol;
      nextSymbol = '..';
    }
    result = `${result} ${nextSymbol}`;
  }
  return result;
};

const generateQuestionAnswer = () => {
  const question = genProgress(genRandInt(1, 100), 12);
  const answer = missingNumber;
  return cons(question, answer);
};

export default () => engine(description, generateQuestionAnswer);
