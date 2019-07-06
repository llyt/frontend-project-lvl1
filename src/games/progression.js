import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What number is missing in the progression?';
let misNum;

const genProgress = (startNum, qnt) => {
  const posMisNum = genRandInt(0, qnt); // generate position of missing number
  const increaser = genRandInt(1, 10);
  let progress = `${startNum}`;
  let prevNum = startNum;
  let nextNum;

  for (let i = 0; i < qnt; i += 1) {
    if (i === posMisNum) {
      nextNum = '..';
      misNum = prevNum + increaser;
    } else {
      nextNum = prevNum + increaser;
    }
    progress = `${progress} ${nextNum}`;
    prevNum += increaser;
  }
  return progress;
};

const genQuestionAsnwer = () => {
  const question = genProgress(genRandInt(1, 100), 12);
  const answer = String(misNum);
  return cons(question, answer);
};

export default () => engine(description, genQuestionAsnwer, 3);
