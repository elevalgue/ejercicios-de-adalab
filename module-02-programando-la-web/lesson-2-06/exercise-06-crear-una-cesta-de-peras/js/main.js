'use strict';

console.log('Are you ready for a good time? :))');

const pearBasket = {}
pearBasket.numberMax = 12;
pearBasket.numberMin = 3;
pearBasket.numberCurrent = 7;
pearBasket.numberInitial = 5;
pearBasket.addPear = function () {
        return (this.numberCurrent + 1);
    }
    pearBasket.takePear = function () {
        return (this.numberCurrent - 1); 
    }
    pearBasket.resetPear = function () {
        return numberInitial
    }


console.log(pearBasket.takePear());
console.log(pearBasket.numberCurrent);