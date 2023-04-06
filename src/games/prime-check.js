import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = (randomInt = getRandomInt(1, 100)) => {
  const rightAnswer = isPrime(randomInt) ? 'yes' : 'no';
  const question = `Question: ${randomInt}`;

  return [question, rightAnswer];
};

export default (description) => launchGame(getData, description);
