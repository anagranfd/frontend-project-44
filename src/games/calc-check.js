import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcRightAnswer = (int1, int2, operator) => {
  switch (operator) {
    case '+':
      return int1 + int2;
    case '-':
      return int1 - int2;
    case '*':
      return int1 * int2;
    default:
      throw new Error('Error operator');
  }
};

const getData = () => {
  const firstInt = getRandomInt(1, 100);
  const secondInt = getRandomInt(1, 100);

  const signsArray = ['+', '-', '*'];

  const arithmOperationIndex = getRandomInt(0, 2);

  const sign = signsArray[arithmOperationIndex];

  const rightAnswer = calcRightAnswer(firstInt, secondInt, sign);
  const question = `Question: ${firstInt} ${sign} ${secondInt}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(getData, description);
