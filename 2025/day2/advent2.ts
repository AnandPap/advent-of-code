import { input } from "./input2";

function f() {
  let sum = 0;
  const inputArray = input.split(",").map((s) => s.split("-").map(Number));

  for (const [start, end] of inputArray) {
    for (let i = start; i <= end; i++) {
      const str = String(i);

      for (let blockSize = 1; blockSize <= str.length / 2; blockSize++) {
        if (str.length % blockSize !== 0) continue;
        const block = str.slice(0, blockSize);

        if (block.repeat(str.length / blockSize) === str) {
          sum += i;
          break;
        }
      }
    }
  }

  console.log(sum);
}

f();
