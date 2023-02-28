import readlineSync from 'readline-sync';

let rightAnswer;
let userAnswer;

let calculationCheck;

const parityCheck = () => {
  const getRandomInt = () => Math.floor(Math.random() * 100);

  const integer = getRandomInt();
  const calcRightAnswer = () => {
    if (integer % 2 === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
  };

  calcRightAnswer();
  console.log(rightAnswer);

  console.log(`Question: ${integer}`);

  userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    calculationCheck = true;
  } else calculationCheck = false;

  return calculationCheck;
};

export default parityCheck;
