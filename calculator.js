/* Objective: Using the Demo #2 slides and Lodash’s documentation, create separate files for each remaining mathematical operation:

Subtract
Multiply
Divide
Use Lodash’s utilities
Fellows will test these operations on their own, ensuring that their code is error/bug free, returning accurate results for their calculations.*/

import {add} from "./add.js";

const result = add(5, 3);

console.log(result);


import { subtract } from "./subtract.js";

const results = subtract(5, 4);

console.log(results);

import {divide} from "./divide.js";

const divresult = divide(10, 2);

console.log(divresult);

import {multiply} from "./multiply.js";

const multiresult = multiply(5, 3);

console.log(multiresult)