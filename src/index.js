import greetings from './games/cli.js';

const printFinishLog = (name, calculationCheck) => {
  if (calculationCheck === false) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

const iteration = (calcFunc, name) => {
  let calculationCheck = true;
  for (let i = 0; i < 3 && calculationCheck === true; i += 1) {
    calculationCheck = calcFunc();
    if (calculationCheck === true) {
      console.log('Correct!');
    }
  }
  printFinishLog(name, calculationCheck);
};

const brainCalc = (calcFunc) => {
  const userName = greetings();
  console.log('What is the result of the expression?');
  iteration(calcFunc, userName);
};

const brainEven = (calcFunc) => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  iteration(calcFunc, userName);
};

const brainGcd = (calcFunc) => {
  const userName = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  iteration(calcFunc, userName);
};

const brainProgression = (calcFunc) => {
  const userName = greetings();
  console.log('What number is missing in the progression?');
  iteration(calcFunc, userName);
};

const brainPrime = (calcFunc) => {
  const userName = greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  iteration(calcFunc, userName);
};

export default greetings;
export { brainCalc, brainEven, brainGcd, brainProgression, brainPrime };
