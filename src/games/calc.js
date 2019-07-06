import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What is the result of the expression?';

const genRandOperation = () => {
  const operations = '+-*/';
  const num = Math.random();
  if (num < 0.25) {
    return operations[0];
  } if (num > 0.25 && num < 0.5) {
    return operations[1];
  } if (num > 0.5 && num < 0.75) {
    return operations[2];
  }
  return operations[3];
};

const genQuestionAsnwer = () => {
  const num1 = genRandInt(20, 50);
  const num2 = genRandInt(1, 10);
  const operation = genRandOperation();
  const question = `${num1} ${operation} ${num2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    case '*':
      answer = String(num1 * num2);
      break;
    case '/':
      answer = String(num1 / num2);
      break;
    default:
      answer = null;
  }
  return cons(question, answer);
};

export default () => engine(description, genQuestionAsnwer, 3);
