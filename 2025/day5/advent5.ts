import { input } from "./input5";

function f() {
  const splitInput = input.split("\n\n");
  const ranges = splitInput[0].split("\n").map((range) => range.split("-").map((border) => Number(border)));

  ranges.sort((a, b) => a[0] - b[0]);

  let current = 0;
  let count = 0;
  for (const [begin, end] of ranges) {
    if (current > end) continue;
    if (current < begin) current = begin;
    count += end - current + 1;
    current = end + 1;
  }

  console.log(count);
}

f();
