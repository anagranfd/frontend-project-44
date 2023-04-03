import readlineSync from 'readline-sync';
import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const parityCheck = (integer = getRandomInt()) => {
  const rightAnswer = integer % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${integer}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    return true;
  }
  return false;
};

export default (description) => launchGame(parityCheck, description);
