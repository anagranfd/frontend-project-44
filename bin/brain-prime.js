#!/usr/bin/env node

import { brainPrime } from '../src/index.js';
import { calcPrime } from '../src/games/prime-check.js';

brainPrime(calcPrime);
