"use strict";

let currentDogAge = 50;

const dogAgeFirst = 15;
const dogAgeSecond = 9;
const dogAgeAhead = 5;

const dogAge = currentDogAge - 2;

if (currentDogAge === 1) {
  console.log(dogAgeFirst);
} else if (currentDogAge === 2) {
  console.log(dogAgeFirst + dogAgeSecond);
} else if (currentDogAge > 2) {
  console.log(dogAgeFirst + dogAgeSecond + 5 * dogAge);
}
