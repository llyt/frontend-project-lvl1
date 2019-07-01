import { cons } from '@hexlet/pairs';
import engine from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  } if (num < 2) {
    return false;
  } if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const genRandInt = max => Math.floor(Math.random() * Math.floor(max));
const getRightAnswer = num => (isPrime(num) ? 'yes' : 'no');

const genQA = () => {
  const question = genRandInt(100);
  const answer = getRightAnswer(question);
  return cons(question, answer);
};

export default () => engine(rules, genQA);
