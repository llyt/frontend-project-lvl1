import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0 ? true : '');

const genQuestionAsnwer = () => {
  const question = genRandInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(description, genQuestionAsnwer, 3);
