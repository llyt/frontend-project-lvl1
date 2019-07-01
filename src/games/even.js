import { cons } from '@hexlet/pairs';
import engine from '../bin/brain-games';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const genRandInt = max => Math.floor(Math.random() * Math.floor(max));
const getRightAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const genQA = () => {
  const question = genRandInt(100);
  const answer = getRightAnswer(question);
  return cons(question, answer);
};

export default () => engine(rules, genQA);
