import { gcd } from 'mathjs';
import { cons } from '@hexlet/pairs';
import engine from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const genRandInt = max => Math.floor(Math.random() * Math.floor(max));

const genQA = () => {
  const num1 = genRandInt(100);
  const num2 = genRandInt(100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return cons(question, answer);
};

export default () => engine(rules, genQA);
