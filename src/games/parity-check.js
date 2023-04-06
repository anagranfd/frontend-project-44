import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (num) => num % 2 === 0;

const getData = (integer = getRandomInt(1, 100)) => {
  const rightAnswer = isEven(integer) ? 'yes' : 'no';
  const question = `Question: ${integer}`;

  return [question, rightAnswer];
};

export default (description) => launchGame(getData, description);
