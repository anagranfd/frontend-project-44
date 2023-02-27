import greetings from './games/cli.js';
import { doCalcIteration, printFinishLog } from './games/calc-check.js';
import { doCalcGCDIteration, printGCDFinishLog } from './games/gcd-check.js';
import parityCheck from './games/parity-check.js';

const brainCalc = () => {
  const userName = greetings();
  doCalcIteration();
  printFinishLog(userName);
};

const brainEven = () => {
  const userName = greetings();
  parityCheck(userName);
};

const brainGcd = () => {
  const userName = greetings();
  doCalcGCDIteration();
  printGCDFinishLog(userName);
};

export default greetings;
export { brainCalc, brainEven, brainGcd };
