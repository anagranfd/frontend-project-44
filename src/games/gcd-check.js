import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const showRightAnswer = (int1, int2) => {
  let divisor = 1;
  const maxDivisor = Math.min(int1, int2);

  for (let i = 2; i <= maxDivisor; i += 1) {
    if (int1 % i === 0 && int2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const getData = (
  firstInt = getRandomInt(1, 100),
  secondInt = getRandomInt(1, 100),
) => {
  const rightAnswer = showRightAnswer(firstInt, secondInt);
  const question = `Question: ${firstInt} ${secondInt}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(getData, description);
