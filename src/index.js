import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (description, func, numOfAttempts) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) {
    console.log(description);
  }
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (func !== undefined) {
    for (let i = 0; i < numOfAttempts; i += 1) {
      const QA = func();
      const question = car(QA);
      const trueAnswer = cdr(QA);
      const userAnswer = readlineSync.question(`Question: ${question} `);
      console.log(`Your answer: ${userAnswer}`);
      if (userAnswer !== trueAnswer) {
        return console.log(`Answer "${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"\nLet's try again, ${userName}!`);
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
  }
  return null;
};
