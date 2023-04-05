import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gcd = (
  firstInt = getRandomInt(1, 100),
  secondInt = getRandomInt(1, 100),
) => {
  const calcRightAnswer = () => {
    let biggerInt;
    let smallerInt;

    const calcBiggerInt = () => {
      if (firstInt >= secondInt) {
        biggerInt = firstInt;
        smallerInt = secondInt;
      } else {
        biggerInt = secondInt;
        smallerInt = firstInt;
      }
    };

    calcBiggerInt();

    if (biggerInt % smallerInt === 0) {
      return smallerInt;
    }
    for (let i = Math.floor(smallerInt / 2); i >= 1; i -= 1) {
      if (biggerInt % i === 0 && smallerInt % i === 0) {
        return i;
      }
    }
    return 1;
  };

  const rightAnswer = calcRightAnswer();
  const question = `Question: ${firstInt} ${secondInt}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launchGame(gcd, description);
