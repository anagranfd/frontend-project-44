import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcRightAnswer = (Int1, Int2, operator) => {
  if (operator === '-') return Int1 - Int2;
  if (operator === '+') return Int1 + Int2;
  return Int1 * Int2;
};

const getData = (
  firstInt = getRandomInt(1, 100),
  secondInt = getRandomInt(1, 100),
) => {
  const signsArray = ['+', '-', '*'];

  const arithmOperationIndex = getRandomInt(0, 2);

  const sign = signsArray[arithmOperationIndex];

  const rightAnswer = calcRightAnswer(firstInt, secondInt, sign);
  const question = `Question: ${firstInt} ${sign} ${secondInt}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(getData, description);
