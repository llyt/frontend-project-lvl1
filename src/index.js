import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (rules = null, func = null, attempts = 3) => {
  console.log('Welcome to the Brain Games!');
  if (rules === null) {
    console.log('');
  } else {
    console.log(`${rules}\n`);
  }
  const userName = readlineSync.question('May I have your name? '); // Ask a name
  console.log(`Hello, ${userName}!\n`); // Greeting
  if (rules !== '' && func !== null) {
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
  }
  return null;
};
