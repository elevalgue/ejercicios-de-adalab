'use strict'; 
'use strict'; 

const adalaber1 = {};
adalaber1.name = "Elena";
adalaber1.age = 32;
adalaber1.job = "Marketeer";
adalaber1.introduction = function () {
    return 'Hola, me llamo ' + this.name;
};
adalaber1.showBio = function () {
    return 'Hola, me llamo ' + this.name + ', tengo' + this.age + 'años y antes trabajaba como' + this.job;
};

// Añado método presentación
console.log(adalaber1.introduction(), "me estoy presentando");

// Añado método showBio 
adalaber1.showBio = function () {
    // console.log(`Hola, me llamo ${this.name}, tengo ${this.age} años y antes trabajaba como ${this.job}`);
};

console.log(`Hola, me llamo ${this.name}, tengo ${this.age} años y antes trabajaba como ${this.job}`);

