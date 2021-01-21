const fs = require('fs');

const text = 'Lorem ipsum';
const ObjectInfo = {
    originalContent: text,
    changedContent: text.toUpperCase(),
    textLenght: text.length,
};

console.log(ObjectInfo);
text = JSON.stringify(ObjectInfo);
console.log(text);

fs.writeFile('./output.txt', text, (error))

