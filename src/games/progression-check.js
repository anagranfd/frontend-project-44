import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const combineProgression = (workInt) => {
  let int = workInt;
  const step = Math.ceil(Math.random() * 10);
  const missingIntIndex = getRandomInt(0, 9);

  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(int);
    int += step;
  }

  const uncompletedProgression = [...progression];
  uncompletedProgression[missingIntIndex] = '..';

  return [uncompletedProgression, progression[missingIntIndex]];
};

const getData = (integer = getRandomInt(1, 100)) => {
  const [uncompletedProgression, rightAnswer] = combineProgression(integer);
  const question = `Question: ${uncompletedProgression.join(' ')}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(getData, description);
