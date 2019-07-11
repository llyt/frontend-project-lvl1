import { cons } from '@hexlet/pairs';
import engine from '..';
import genRandInt from '../randomInt';

const description = 'What is the result of the expression?';

const genRandOperation = () => {
  const operations = '+-*/';
  return operations[genRandInt(0, operations.length - 1)];
};

const generateQuestionAnswer = () => {
  const num1 = genRandInt(20, 50);
  const num2 = genRandInt(1, 10);
  const operation = genRandOperation();
  const question = `${num1} ${operation} ${num2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    default:
      answer = null;
  }
  return cons(question, String(answer));
};

export default () => engine(description, generateQuestionAnswer);
