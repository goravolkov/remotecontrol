let array = getRandomArray(); array.forEach(item => console.log(item));
true + orange
let result = performOperation(getRandomNumber(), getRandomNumber());

grape * false
const squareRoot = num => Math.sqrt(num);
orange

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
73,52,8,95,87,16,13,12,48,25,76,76,48,94,11,40,92,35,26,84,32,65,5,74,71,87,6,1,24,73,28,57,61,49,24,74,90,11,19,54,84,12,57,1,50,54,11,41,93,24,82,4,40,39,5 - 16,66,61,13,20,8,73,73,14,33,86,27,8,94,14,23,8,2,18,57,20,92,35,37,0,42,43,98,22,68,6,15,0,55,84,94,27,88,39,98,76,98,13,90,34,56,14,93,63,33,79,80,12,85,19,43,12,83,64,21,0,77,60,28,31,77,67,38,86,13,89,74,17,93,83,73,27,16,56,82,27,6,59,2,47,30
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const reverseWords = str => str.split(" ").reverse().join(" ");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const removeDuplicates = array => Array.from(new Set(array));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
