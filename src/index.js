import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

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

const launchGame = (calcFunc) => {
  const userName = greetings();
  switch (calcFunc.name) {
    case 'parityCheck':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calculation':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'calcProgression':
      console.log('What number is missing in the progression?');
      break;
    default:
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".',
      );
      break;
  }
  iteration(calcFunc, userName);
};

export default launchGame;
export { greetings };
