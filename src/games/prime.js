import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAnswer = () => {
  const question = genRandInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(description, generateQuestionAnswer);
