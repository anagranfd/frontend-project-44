import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcProgression = (integer = getRandomInt(1, 100)) => {
  const combineProgression = () => {
    let int = integer;
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

  const [uncompletedProgression, rightAnswer] = combineProgression();
  const question = `Question: ${uncompletedProgression.join(' ')}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(calcProgression, description);
