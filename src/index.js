import readlineSync from 'readline-sync';

const launchGame = (calcFunc, description) => {
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

  const iteration = (calculationFunc, name) => {
    let calculationCheck = true;
    for (let i = 0; i < 3 && calculationCheck === true; i += 1) {
      calculationCheck = calculationFunc();
      if (calculationCheck === true) {
        console.log('Correct!');
      }
    }
    printFinishLog(name, calculationCheck);
  };

  const userName = greetings();

  console.log(description);

  iteration(calcFunc, userName);
};

export default launchGame;
