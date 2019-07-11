import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let x = number1;
  let y = number2;
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const generateQuestionAnswer = () => {
  const num1 = genRandInt(1, 100);
  const num2 = genRandInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return cons(question, String(answer));
};

export default () => engine(description, generateQuestionAnswer);
