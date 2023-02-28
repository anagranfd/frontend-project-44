import readlineSync from 'readline-sync';

let rightAnswer;
let userAnswer;

let calculationCheck;

const calcPrime = () => {
  const randomInt = Math.floor(Math.random() * 100);

  let divisor;

  const checkIfPrime = () => {
    if (randomInt === 0) {
      divisor = 0;
    } else {
      for (let i = Math.floor(randomInt / 2); i >= 1; i -= 1) {
        if (randomInt % i === 0) {
          divisor = i;
          break;
        }
      }
    }
  };

  checkIfPrime();

  if (divisor > 1 || divisor === 0) {
    rightAnswer = 'no';
  } else {
    rightAnswer = 'yes';
  }

  console.log(`Question: ${randomInt}`);

  userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    calculationCheck = true;
  } else {
    calculationCheck = false;
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
    );
  }

  return calculationCheck;
};

export default calcPrime;
