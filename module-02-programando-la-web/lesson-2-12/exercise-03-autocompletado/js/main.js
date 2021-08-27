'use strict';

console.log('Are you ready for a good time? :)');

const selectPerson = document.querySelector('#selectPerson');
const inputName = document.querySelector('#firstName');
const inputFamilyName = document.querySelector('#familyName');
const inputPhone = document.querySelector('#phone');
const form = document.querySelector('#form'); 

const peopleData = [
    {
        name: 'Dandy',
        familyName: 'Piranha',
        phone: 6666666, 
    },
    {
        name: 'Papi',
        familyName: 'Pachuli',
        phone: 6767676, 
    },
    {
        name: 'Maricarmen',
        familyName: 'Pepino',
        phone: 8787878, 
    },
]

function autocompleteForm() {
   
        console.log('You had me at hello world');
        if (selectPerson.value === 'Dandy') {
            inputName.value = peopleData[0].name;
            inputFamilyName.value = peopleData[0].familyName;
            inputPhone.value = peopleData[0].phone;
            
        } else if (selectPerson.value === 'Papi') {
            console.log('paso por papi');
            inputName.value = peopleData[1].name;
            inputFamilyName.value = peopleData[1].familyName;
            inputPhone.value = peopleData[1].phone;
            
        } else if (selectPerson.value === 'Maricarmen') {
            inputName.value = peopleData[2].name;
            inputFamilyName.value = peopleData[2].familyName;
            inputPhone.value = peopleData[2].phone;
        }
        
}

selectPerson.addEventListener('change', autocompleteForm); 