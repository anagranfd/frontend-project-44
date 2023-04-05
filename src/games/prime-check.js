import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcPrime = (randomInt = getRandomInt(1, 100)) => {
  const checkIfPrime = () => {
    let divisor;

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
    return divisor > 1 || divisor === 0 ? 'no' : 'yes';
  };

  const rightAnswer = checkIfPrime();
  const question = `Question: ${randomInt}`;

  return [question, rightAnswer];
};

export default (description) => launchGame(calcPrime, description);
