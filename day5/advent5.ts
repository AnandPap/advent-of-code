import { input } from "./input5";

function sortAscendingByEndOfRange(ranges: number[][]) {
  ranges.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
}

function f() {
  const splitInput = input.split("\n\n");
  const ranges = splitInput[0].split("\n").map((range) => range.split("-").map((border) => Number(border)));

  sortAscendingByEndOfRange(ranges);

  // Case when second range envelops the prior, add their bottom difference as separate range
  const newRanges = [];
  for (let i = 1; i < ranges.length; i++) {
    if (ranges[i][0] < ranges[i - 1][0]) {
      newRanges.push([ranges[i][0], ranges[i - 1][0] - 1]);
    }
  }
  ranges.push(...newRanges);

  sortAscendingByEndOfRange(ranges);

  // Cut beginning of ranges to start after prior ends
  for (let i = 1; i < ranges.length; i++) {
    if (ranges[i][0] <= ranges[i - 1][1]) ranges[i][0] = ranges[i - 1][1] + 1;
  }

  let count = 0;
  for (const [begin, end] of ranges) {
    count += end - begin + 1;
  }

  console.log(count);
}

f();
