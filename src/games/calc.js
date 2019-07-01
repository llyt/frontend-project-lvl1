import { cons } from '@hexlet/pairs';
import engine from '..';

const rules = 'What is the result of the expression?';

const genRandInt = max => Math.floor(Math.random() * Math.floor(max));
const genRandOperation = () => {
  const randNum = Math.random();
  if (randNum < 0.25) {
    return '+';
  } if (randNum > 0.25 && randNum < 0.5) {
    return '-';
  } if (randNum > 0.5 && randNum < 0.75) {
    return '*';
  }
  return '/';
};

const genQA = () => {
  const question = `${genRandInt(20)} ${genRandOperation()} ${genRandInt(20)}`;
  const answer = String(eval(question));
  return cons(question, answer);
};

export default () => engine(rules, genQA);
