import readlineSync from 'readline-sync';

const launchGame = (getRoundData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = getRoundData();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default launchGame;
