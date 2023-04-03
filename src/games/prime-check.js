import readlineSync from 'readline-sync';
import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcPrime = (randomInt = getRandomInt()) => {
  let divisor;

  const checkIfPrime = () => {
    if (randomInt === 0) {
      divisor = 0;
    } else {
      for (let i = Math.floor(randomInt / 2); i >= 1; i -= 1) {
        if (randomInt % i === 0) {
          divisor = i;
          break;
        }
      }
    }
  };

  checkIfPrime();

  const rightAnswer = divisor > 1 || divisor === 0 ? 'no' : 'yes';

  console.log(`Question: ${randomInt}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    return true;
  }
  console.log(
    `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
  );

  return false;
};

export default (description) => launchGame(calcPrime, description);
