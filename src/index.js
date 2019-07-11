import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (description, getQuestionAnswer) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < rounds; i += 1) {
    const questionAnswer = getQuestionAnswer();
    const question = car(questionAnswer);
    const trueAnswer = cdr(questionAnswer);
    const userAnswer = readlineSync.question(`Question: ${question}`);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== trueAnswer) {
      console.log(`Answer "${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
