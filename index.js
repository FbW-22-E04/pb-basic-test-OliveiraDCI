// Add answers here
const nameOfCity = function (city) {
  if (city.toLowerCase().startsWith("new")) return city;
  if (city.toLowerCase().startsWith("los")) return city;
  return "The city name does not begin with Los or New";
};
console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));

//
const isDivisible = (int) => int % 100 === 0;
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

//
const isRaining = (booleanValue) =>
  booleanValue == true
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
console.log(isRaining(true));

//
const geometricalSequence = function (loopTimesTwo) {
  let counter = "";
  for (let i = 2; i <= 256; i *= 2) {
    counter += i.toString().concat(" ");
  }
  return counter.trim();
};
console.log(geometricalSequence());

//
const multiplesOfThree = function () {
  let result = "";
  for (let i = 3; i <= 15; i += 3) {
    result += i.toString().concat(" ");
  }
  return result.trim();
};
console.log(multiplesOfThree());

//
const powerOf = (int) => Math.pow(int, int);
console.log(powerOf(3));
console.log(powerOf(4));

//
const vowelCount = function (str) {
  let strVowels = str.match(/a|e|i|o|u/gi) || [];
  return strVowels.length;
};
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
