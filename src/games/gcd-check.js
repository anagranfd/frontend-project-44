import readlineSync from 'readline-sync';

let rightAnswer;
let userAnswer;

let calculationCheck;

// calc arguments and operator
// ask user about userAnswer
// calc rightAnswer
// calc calculationCheck value

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomInt = () => Math.floor(Math.random() * 100);

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

  userAnswer = readlineSync.question('Your answer: ');
  const userAnswerStr = Number(userAnswer);

  if (userAnswerStr === rightAnswer) {
    calculationCheck = true;
  } else calculationCheck = false;

  return calculationCheck;
};

// printGCDFinishLog

const printGCDFinishLog = (name) => {
  if (calculationCheck === false) {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`
    );
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

// export doCalcGCDIteration, printGCDFinishLog

export { gcd, printGCDFinishLog };
