/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
 let arr = ['a', 'b', 'c', 'd', 'e']; 
 arr.slice(2, 4); // returns a new array, end parameter is not included
 arr.slice(); // no arguments = a copy of an array OR [...arr]
 
// arr.splice(2, 4); mutates the original array, 4 - сколько элементов надо удалить 
 arr.splice(-1); //removes the last element

 arr = ['a', 'b', 'c', 'd', 'e']; 
 const arr2 = ['j', 'i', 'h', 'g', 'f']; 
 arr.reverse(); //mutates the original array 

 const letters = arr.concat(arr2); // the same as [...arr, ...arr2] but without mutating
letters.join('-'); 
*/
/* 
const arr = [23, 11, 64];
arr[0];
arr.at(0); // the same things

arr[arr.length -1]; // the last element
arr.slice(-1)[0]; //to get the last element 
arr.at(-1); //NEW way of gettin the last element 
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement} `);
  } else {
    console.log(`You withdrew ${Math.abs(movement)} `);
  }
}
*/

// -------------------------- FOR EACH (elem, index, array) --------------------------
//FR high order function that requires a callback function
// When to use: you cannot break out from forEach loop, он всегда дойдет до конца. Если надо где-т прекратить, то надо использовать for of

/*
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement} `);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)} `);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'], // key, value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, set) {
  // '_' чтобы выкинуть ненужный параметр
  console.log(`${key}: ${value}`); // key is the same asvalue as the SET does not have keys and indexes
});
*/

// ---------------------------------- CODING CHALLENGE 1 ----------------------------------

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {
//   const dogsOnly = arr1.slice(1, -2);
//   console.log(dogsOnly);

//   const allDogs = dogsOnly.concat(arr2);
//   console.log(allDogs);

//   allDogs.forEach(function (age) {
//     if (age >= 3) {
//       console.log(`This dog is an adult because it is ${age} y.o.`);
//     } else {
//       console.log(`This dog is a puppy because it is ${age} y.o.`);
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// const calcAverageHumanAge = function (ages) {
//   let humanAge = [];
//   ages.forEach(function (age, i) {
//     if (age <= 2) {
//       humanAge[i] = age * 2;
//     } else {
//       humanAge[i] = 16 + age * 4;
//     }
//   });
//   console.log(humanAge);
//   return humanAge;
// };

// calcAverageHumanAge(dogsJulia);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const averageHumanAge = adults.reduce(
//     (acc, age) => acc + age / adults.length,
//     0
//   );
//   // console.log(averageHumanAge);
// };

// const calcAverageHumanAge2 = function (ages) {
//   const result = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   // console.log(result);
//   result;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

/*
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// (принимает1, принимает2) => возвращает

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements, movementsUSD);

movements.map((mov, i, arr) => {
  if () {
    return 
  } else {
    return
  }
});
*/

// -------------------------- FILTER METHOD --------------------------------
/*
Callback specifies condition; 
Returns a boolean value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
console.log(deposits);
*/

// -------------------------- REDUCE METHOD --------------------------------
// привести элементы к 1му значению
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator (like a snowball),
// do not forger to return and update an accumulator

/*
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);
//0 - initial value of an accumulator - start adding with 0
// balanceFor += mov; если через фор реализовать

// MAXIMUM VALUE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
 */

// -------------------------- CHAINING METHOD --------------------------------

// const eurToUsd = 1.1;
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0); // до тех пор, пока возвращается новый массив

// console.log(totalDepositUSD);

// -------------------------- FIND METHOD --------------------------------
/*const firstWithdrawal = movements.find(mov => mov < 0); // not return a new array, only FIRST ELEMENT

// FILTER - all el + new array
// FIND - 1st el + no array

// -------------------------- DEFINING ARRAYS --------------------------------

const x = new Array(7); // new array with 7 empty elements, length is 7
// We cannot call map on this empty array
// we can call FILL methid

x.fill(1, 3, 5); // mutates the array, fill the whole array with 1, starts from 3 ends at 4(is not included)

// Arr.from
const y = Array.from({ length: 7 }, () => 1); //return 1 in each iteration
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// get movements from UI

// ---------------------------------- CODING CHALLENGE 4 ----------------------------------


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eatind ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'
  }`
);

// 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.recFood < dog.curFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.recFood > dog.curFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(dogs);

// Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

console.log(`${ownersEatTooLittle.join(' and ')}'s eat too litle`);
console.log(`${ownersEatTooMuch.join(' and ')}'s eat too much`);
console.log(dogs.some(dog => dog.curFood === dog.recFood));

const dogEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

*/

// ------------------------------------ SECTION 11 ------------------------------------
console.log(Number.parseInt('25F', 10)); // преобразует в число
console.log(Number('25F')); //NaN - не может  быть преобразован в число
console.log(Number.parseFloat('25.5 F')); //понимает цифры с десятичными знаками

Number.isNaN(20); // false
Number.isNaN('+15'); // true
Number.isFinite(3.14); // конечное ли число (все, кроме NaN or infinite) // true
Number.isFinite('Двадцать пять'); //false

const future = new Date(2037, 10, 19, 15, 23);
//takes 2 days

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 24));
console.log(days1);

// ------------------------------------ TIMERS ------------------------------------
/* OPERATIONS WITH DATES
SetTimeOut - once 
Set interval - till we stop
The execution of the code does not stop here!!!!!!!!! Это называется асинхронный Джава Скрипт 

*/

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // recieves callback (1 arg), we do not cll the function, that will be the callback who calls that
// ARGUMENTS after milliseconds
console.log('Waiting...');
// We can cancel the timer
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // ТАК НЕ ПОЯВИТСЯ И НЕ СРАБОТАЕТ Ф-Я

// -------------------- setInterval -----------------------------
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 10000000);
