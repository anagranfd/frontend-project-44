import greetings from './games/cli.js';
import { printFinishLog } from './games/calc-check.js';
import { printGCDFinishLog } from './games/gcd-check.js';
import { printProgressionFinishLog } from './games/progression-check.js';
import parityCheck from './games/parity-check.js';

const iteration = (calcFunc) => {
  let calculationCheck = true;
  for (let i = 0; i < 3 && calculationCheck === true; i += 1) {
    calculationCheck = calcFunc();
    if (calculationCheck === true) {
      console.log('Correct!');
    }
  }
};

const brainCalc = (calcFunc) => {
  const userName = greetings();
  iteration(calcFunc);
  printFinishLog(userName);
};

const brainEven = () => {
  const userName = greetings();
  parityCheck(userName);
};

const brainGcd = (calcFunc) => {
  const userName = greetings();
  iteration(calcFunc);
  printGCDFinishLog(userName);
};

const brainProgression = (calcFunc) => {
  const userName = greetings();
  iteration(calcFunc);
  printProgressionFinishLog(userName);
};

export default greetings;
export {
  brainCalc, brainEven, brainGcd, brainProgression,
};
