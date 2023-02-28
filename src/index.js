import greetings from './games/cli.js';
import { parityCheck, instructParity } from './games/parity-check.js';
import { printFinishLog } from './games/calc-check.js';
import { printGCDFinishLog, instructGcd } from './games/gcd-check.js';
import {
  printProgressionFinishLog,
  instructProgression,
} from './games/progression-check.js';
import { printPrimeFinishLog, instructPrime } from './games/prime-check.js';

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
  instructParity();
  parityCheck(userName);
};

const brainGcd = (calcFunc) => {
  const userName = greetings();
  instructGcd();
  iteration(calcFunc);
  printGCDFinishLog(userName);
};

const brainProgression = (calcFunc) => {
  const userName = greetings();
  instructProgression();
  iteration(calcFunc);
  printProgressionFinishLog(userName);
};

const brainPrime = (calcFunc) => {
  const userName = greetings();
  instructPrime();
  iteration(calcFunc);
  printPrimeFinishLog(userName);
};

export default greetings;
export {
  brainCalc, brainEven, brainGcd, brainProgression, brainPrime,
};
