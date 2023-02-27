import readlineSync from 'readline-sync';

let rightAnswer;
let userAnswer;

let calculationCheck;

// calc arguments and operator
// ask user about userAnswer
// calc rightAnswer
// calc calculationCheck value

const calculation = () => {
  const getRandomInt = () => Math.floor(Math.random() * 100);

  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

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

  rightAnswer = calcRightAnswer();

  const calcOperator = () => {
    if (arithmOperationIndex === 0) return '+';
    if (arithmOperationIndex === 1) return '-';
    return '*';
  };

  const operator = calcOperator();

  console.log(`Question: ${firstInt} ${operator} ${secondInt}`);

  userAnswer = readlineSync.question('Your answer: ');
  const userAnswerStr = Number(userAnswer);

  if (userAnswerStr === rightAnswer) {
    calculationCheck = true;
  } else calculationCheck = false;
};

// print userAnswerLog

const userAnswerLog = () => {
  if (calculationCheck === true) {
    console.log('Correct!');
  }
};

// do calc iterations

const doCalcIteration = () => {
  calculationCheck = true;
  for (let i = 0; i < 3 && calculationCheck === true; i += 1) {
    calculation();
    userAnswerLog();
  }
};

// printFinishLog

const printFinishLog = (name) => {
  if (calculationCheck === false) {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
    );
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

// export doCalcIteration, printFinishLog

export { doCalcIteration, printFinishLog };
