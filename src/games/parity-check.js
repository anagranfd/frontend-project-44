import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const parityCheck = (integer = getRandomInt(1, 100)) => {
  const rightAnswer = integer % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${integer}`;

  return [question, rightAnswer];
};

export default (description) => launchGame(parityCheck, description);
