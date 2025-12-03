import { input } from "./input3";

function f() {
  const inputArray = input.split("\n");
  const resultNumLength = 12;
  let sum = 0;

  for (const numBlock of inputArray) {
    const indexArray: number[] = [];

    for (let counter = resultNumLength; counter > 0; counter--) {
      const lastIndexInArray = indexArray.at(-1) ?? -1;
      let nextIndex = lastIndexInArray + 1;
      for (let i = lastIndexInArray + 2; i < numBlock.length - counter + 1; i++) {
        if (numBlock[i] > numBlock[nextIndex]) nextIndex = i;
      }
      indexArray.push(nextIndex);
    }

    let num = "";
    for (let i = 0; i < indexArray.length; i++) {
      num += numBlock[indexArray[i]];
    }

    sum += Number(num);
  }

  console.log(sum);
}

f();
