// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(n => n + 5);
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 

// 2  
const numbersReformatted = numbers.map(s => s + ": ");
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
console.log(numbersReformatted);

// 3
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(words => words.substring(0, words.length - 1));
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);

// 4:
const firstLetters = words.map(words => words.slice(0, 1));
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus:
const capitalizedWords = words.map(words => words.charAt(0).toUpperCase()+words.slice(1));
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);
