import readlineSync from 'readline-sync';

const launchGame = (calcFunc, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = calcFunc();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default launchGame;
