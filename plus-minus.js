'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let sumNumbersNegative = 0;
  let sumNumbersPositive = 0;
  let sumNumbersZeros = 0;
  const arrayLength = arr.length;

  for (let i = 0; i <= arrayLength; i++) {
    if (arr[i] == 0) {
      sumNumbersZeros++;
    }

    if (arr[i] < 0) {
      sumNumbersNegative++;
    }

    if (arr[i] > 0) {
      sumNumbersPositive++;
    }
  }

  const resultNumbersNegative = (sumNumbersNegative / arrayLength).toFixed(6);
  const resultNumbersPositive = (sumNumbersPositive / arrayLength).toFixed(6);
  const resultNumbersZeros = (sumNumbersZeros / arrayLength).toFixed(6);

  console.log(resultNumbersPositive);
  console.log(resultNumbersNegative);
  console.log(resultNumbersZeros);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
