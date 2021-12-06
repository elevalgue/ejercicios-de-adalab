import '../styles/App.scss';
// import { useState } from 'react';

let vowel1 = 'a';
let newVowel = vowel1.replace(vowel1, 'i' ); 
console.log(newVowel, 'era una a')

let vowel2 = 'e';
let newVowel2 = vowel2.replace(vowel2, 'i' ); 
console.log(newVowel2, 'era una e')

let vowel3 = 'o';
let newVowel3 = vowel3.replace(vowel3, 'i' ); 
console.log(newVowel3, 'era una o');

let vowel4 = 'u';
let newVowel4 = vowel4.replace(vowel4, 'i' ); 
console.log(newVowel4, 'era una u');


function App() {
  return (
    <div className="App">
      <h1 className="title">Traductor MIMIMI</h1>
      <p>{ }</p>
      <form>
        <label htmlFor="">Escribe tu texto aquí</label>
        <textarea id="" ></textarea>
      </form>
    </div>
  );
}

export default App;
