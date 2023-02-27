import readlineSync from 'readline-sync';
import { doCalcIteration, printFinishLog } from './games/calc-check.js';
import parityCheck from './games/parity-check.js';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const brainCalc = () => {
  const userName = greetings();
  doCalcIteration();
  printFinishLog(userName);
};

const brainEven = () => {
  const userName = greetings();
  parityCheck(userName);
};

export default greetings;
export { brainCalc, brainEven };
