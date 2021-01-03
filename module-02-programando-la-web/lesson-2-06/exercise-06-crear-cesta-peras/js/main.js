'use strict'; 

/* --------------------- Parte del ejercicio 1 ---------------*/
// Creamos un objeto que sea una cesta de peras y que tiene las siguientes propiedades. 

const pearBasket = {
    max: 9,
    min: 2,
    currentPears: 7,
    initialPears: 3
};

/* --------------------- Parte del ejercicio 2 ---------------*/
// Creamos los siguientes métodos. 

// 1. Añadir al cesto 1 pera 

pearBasket.addPears = function (amount) {
    this.currentPears += amount;
};

console.log(pearBasket.currentPears);
// probamos a añadir 4 en esta ocasión
pearBasket.addPears(4);
console.log(pearBasket.currentPears);

// 2. Sacar del cesto 1 pera 
pearBasket.removePears = function (amount) {
    this.currentPears -= amount;
};

console.log(pearBasket.currentPears);
// probamos a sacar 3
pearBasket.removePears(3);
console.log(pearBasket.currentPears);

// 3. Restablecer el número de peras al valor inicial

pearBasket.restart = function () {
    this.currentPears = this.initialPears;
};

pearBasket.restart();
console.log(pearBasket.currentPears);