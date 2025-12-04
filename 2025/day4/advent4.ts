import { input } from "./input4";

function f() {
  const inputArray = input.split("\n").map((rowNum) => rowNum.split(""));

  let totalSum = 0;
  let localSum = 0;
  do {
    localSum = 0;
    const toRemove = [];

    for (let rowNum = 0; rowNum < inputArray.length; rowNum++) {
      for (let c = 0; c < inputArray[rowNum].length; c++) {
        if (inputArray[rowNum][c] !== "@") continue;

        let count = 0;
        if (rowNum !== 0) {
          if (inputArray[rowNum - 1][c - 1] === "@") count++;
          if (inputArray[rowNum - 1][c] === "@") count++;
          if (inputArray[rowNum - 1][c + 1] === "@") count++;
        }
        if (inputArray[rowNum][c - 1] === "@") count++;
        if (inputArray[rowNum][c + 1] === "@") count++;
        if (rowNum !== inputArray.length - 1) {
          if (inputArray[rowNum + 1][c - 1] === "@") count++;
          if (inputArray[rowNum + 1][c] === "@") count++;
          if (inputArray[rowNum + 1][c + 1] === "@") count++;
        }

        if (count < 4) {
          localSum++;
          toRemove.push([rowNum, c]);
        }
      }
    }

    for (const [rowNum, c] of toRemove) inputArray[rowNum][c] = ".";

    totalSum += localSum;
  } while (localSum !== 0);

  console.log(totalSum);
}

f();
