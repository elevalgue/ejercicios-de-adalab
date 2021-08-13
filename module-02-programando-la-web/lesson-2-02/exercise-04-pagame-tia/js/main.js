'use strict';

console.log('Are you ready for a good time? :)');

// Nos vamos de cena de Navidad,
    // Somos en total 9 personas
    // La cuenta del restaurante japonés es de 128€
    // Ana tiene que pagar 2€ más porque ha pedido un chupito de sake

    const people = 9;
    const bill = 128;
    const sake = 2;
    
// 1. ¿Cuánto tenemos que pagar cada una?
console.log('Cabemos a', (bill - sake) / people, 'euros cada una');

// 2.  ¿Y Ana?
console.log('Ana tiene que apoquinar', (bill / people) + sake);