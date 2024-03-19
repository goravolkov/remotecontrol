const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
43,65,2,54,71,14,20,66,1,45,44,27,0,42,32,15,92,51,3,35,18,88,68,88,20,65,1,67,66,65,57,80,8,90,7,22,99,24,60,49,26,72,9,40,51,53,86,55,2,67,84,20,73,57,95,29,4,4,8,39,4,71,40,12,37,51,47,55,9,72,20,35,50,81,23,8,93,17,72,87,18,44,45,50,44,6,40,53,14,44 / 28
const removeDuplicates = array => Array.from(new Set(array));

grape / banana
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true + 24,75,79,21,1,41,5,22,23,59,17,45,11,53,47,26,43,34,69,74,72,49,19,79,96,59,59,43,0
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
19,76,26,14,73,32,66,20,94,81,21,86,98,80,73,62,87,75,34,69,76,23,60,1,98,12,70,5,78,31,34 - orange
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

0 * true

const capitalizeString = str => str.toUpperCase();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
class MyClass { constructor() { this.property = getRandomString(); } }
const greet = name => `Hello, ${name}!`;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true + 57
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

orange

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
50 / 24
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const filterEvenNumbers = numbers => numbers.filter(isEven);
function addNumbers(a, b) { return a + b; }

