import { cons } from '@hexlet/pairs';
import engine from '..';

const rules = 'What number is missing in the progression?';
let misNum;

const randNum = max => Math.floor(Math.random() * Math.floor(max));
const genProgress = (qnt) => {
  const posMisNum = randNum(qnt); // generate position of missing number
  let progress = '5';
  let prevNum = 5;
  let nextNum;

  for (let i = 0; i < qnt; i += 1) {
    if (i === posMisNum) {
      nextNum = '..';
      misNum = prevNum + 3;
    } else {
      nextNum = prevNum + 3;
    }
    progress += ` ${nextNum}`;
    prevNum += 3;
  }
  return progress;
};

const genQA = () => {
  const question = genProgress(12);
  const answer = String(misNum);
  return cons(question, answer);
};

export default () => engine(rules, genQA);