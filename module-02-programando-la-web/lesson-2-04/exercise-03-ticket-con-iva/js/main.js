"use strict";

function calculatePrice(a) {
  let noTaxAdded = a;
  let tax = a * 0.21;
  let total = a + tax;

  return `Precio sin IVA: ${noTaxAdded}, IVA: ${tax} y total: ${total}`;
}

let totalPrice = calculatePrice(10);
console.log(totalPrice);

function calculatePrice2(a) {
  let noTaxAdded = a;
  let tax = a * 0.08;
  let total = a + tax;

  return `Precio sin IVA: ${noTaxAdded}, IVA: ${tax} y total: ${total}`;
}

let totalPrice2 = calculatePrice2(1);
console.log(totalPrice2);
