import readlineSync from 'readline-sync';

let rightAnswer;
let userAnswer;

let calculationCheck;

const calcProgression = () => {
  const getRandomInt = () => Math.floor(Math.random() * 10);

  let int = getRandomInt();
  const step = Math.ceil(Math.random() * 10);
  const missingIntIndex = Math.floor(Math.random() * 10);

  const progression = [];

  const combineProgression = () => {
    for (let i = 0; i < 10; i += 1) {
      progression.push(int);
      int += step;
    }
  };

  combineProgression();

  const uncompletedProgression = [...progression];
  uncompletedProgression[missingIntIndex] = '..';

  console.log(`Question: ${uncompletedProgression.join(' ')}`);

  rightAnswer = progression[missingIntIndex];

  userAnswer = readlineSync.question('Your answer: ');
  const userAnswerStr = Number(userAnswer);

  if (userAnswerStr === rightAnswer) {
    calculationCheck = true;
  } else {
    calculationCheck = false;
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
    );
  }

  return calculationCheck;
};

export default calcProgression;
