#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');
const numOfAttempts = 3;

console.log(`Hello, ${userName}\n`);

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const getRightAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = (name, attempts) => {
  let result = `Congratulations, ${name}!`;
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomInt(30);
    const trueAnswer = getRightAnswer(question);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      result = `Answer "${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"\nLet's try again, ${name}!`;
      break;
    }
  }
  return console.log(result);
};

evenGame(userName, numOfAttempts);
