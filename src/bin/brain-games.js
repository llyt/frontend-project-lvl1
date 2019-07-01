import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (rules, func, attempts = 3) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  let result = `Congratulations, ${userName}!`;

  for (let i = 0; i < attempts; i += 1) {
    const QA = func();
    const question = car(QA);
    const trueAnswer = cdr(QA);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      result = `Answer "${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"\nLet's try again, ${userName}!`;
      break;
    }
  }
  return console.log(result);
};
