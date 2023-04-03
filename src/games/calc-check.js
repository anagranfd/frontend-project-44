import readlineSync from 'readline-sync';
import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calculation = (firstInt = getRandomInt(), secondInt = getRandomInt()) => {
  const countArithmOperationIndex = () => {
    let operationPosition = Math.floor(Math.random() * 10);
    while (operationPosition > 3 || operationPosition === 0) {
      operationPosition = Math.floor(Math.random() * 10);
    }
    return operationPosition - 1;
  };

  const arithmOperationIndex = countArithmOperationIndex();

  const addition = firstInt + secondInt;
  const substraction = firstInt - secondInt;
  const multiplication = firstInt * secondInt;

  const calcRightAnswer = () => {
    if (arithmOperationIndex === 0) return addition;
    if (arithmOperationIndex === 1) return substraction;
    return multiplication;
  };

  const rightAnswer = calcRightAnswer();

  const calcOperator = () => {
    if (arithmOperationIndex === 0) return '+';
    if (arithmOperationIndex === 1) return '-';
    return '*';
  };

  const operator = calcOperator();

  console.log(`Question: ${firstInt} ${operator} ${secondInt}`);

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

export default (description) => launchGame(calculation, description);
