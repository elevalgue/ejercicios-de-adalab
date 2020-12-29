'use strict'; 

const adalaber1 = {};
adalaber1.name = "Elena";
adalaber1.age = 32;
adalaber1.job = "Marketer";

adalaber1.run = function () {
    console.log('estoy corriendo');
}   

const distance = 50; 
adalaber1.runAMarathon = (distance) =>
`${adalaber1.run} una maratón de ${distance} kilometros`;  
    
    
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);

