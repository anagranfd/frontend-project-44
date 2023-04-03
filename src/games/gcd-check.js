import readlineSync from 'readline-sync';
import launchGame from '../index.js';
import getRandomInteger from '../getRandomInt.js';

const gcd = (getRandomInt = getRandomInteger) => {
  let firstInt;
  let secondInt;

  const calcInitIntegers = () => {
    firstInt = getRandomInt();
    secondInt = getRandomInt();
    if (firstInt === 0 || secondInt === 0) calcInitIntegers();
  };

  calcInitIntegers();

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

  let rightAnswer;

  if (biggerInt % smallerInt === 0) {
    rightAnswer = smallerInt;
  } else {
    for (let i = Math.floor(smallerInt / 2); i >= 1; i -= 1) {
      if (biggerInt % i === 0 && smallerInt % i === 0) {
        rightAnswer = i;
        break;
      }
    }
  }

  console.log(`Question: ${firstInt} ${secondInt}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const userAnswerStr = Number(userAnswer);

  if (userAnswerStr === rightAnswer) {
    return true;
  }
  console.log(
    `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
  );

  return false;
};

export default (description) => launchGame(gcd, description);
