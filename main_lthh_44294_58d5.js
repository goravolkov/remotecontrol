const reverseString = str => str.split("").reverse().join("");
6 / kiwi
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const reverseString = str => str.split("").reverse().join("");
kiwi


const greet = name => `Hello, ${name}!`;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
84,15,63,50,22,91,94,49,57,76,91,0,78 - true
const getUniqueValues = array => [...new Set(array)];
banana / true
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findSmallestNumber = numbers => Math.min(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fetchData = async url => { const response = await fetch(url); return response.json(); }

25 - false
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const variableName = getRandomNumber();
const formatDate = date => new Date(date).toLocaleDateString();
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
28 * false

const findLargestNumber = numbers => Math.max(...numbers);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
50 + 28

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange / 95
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const findLargestNumber = numbers => Math.max(...numbers);
9 * banana

console.log(getRandomString());
grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const sum = (a, b) => a + b;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
grape

const randomNumber = getRandomNumber();
const fetchData = async url => { const response = await fetch(url); return response.json(); }
22 / 14,70,75,20,55,55,48,50,35,62,86,17,18,41,43,88,68,74,44,83,82,2,28,53,73,90,11,73,19,14,26,98,48,17,43,2,25,42,21,42,88,57,27,49,45,15,59
const formatDate = date => new Date(date).toLocaleDateString();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
banana

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
grape

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
console.log(getRandomString());
kiwi

const fetchData = async url => { const response = await fetch(url); return response.json(); }
true / 19
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape

class MyClass { constructor() { this.property = getRandomString(); } }
const fetchData = async url => { const response = await fetch(url); return response.json(); }
kiwi / false
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
