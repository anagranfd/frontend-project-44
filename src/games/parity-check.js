import readlineSync from 'readline-sync';

const parityCheck = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < 3; i += 1) {
    const integer = getRandomInt();
    const rightAnswer = () => {
      if (integer % 2 === 0) return 'yes';
      return 'no';
    };

    console.log(`Question: ${integer}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default parityCheck;
