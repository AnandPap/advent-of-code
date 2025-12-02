import { input } from "./input2";

function f() {
  let sum = 0;
  const inputArray = input.split(",").map((s) => s.split("-"));

  for (const e of inputArray) {
    for (let i = Number(e[0]); i <= Number(e[1]); i++) {
      const string = i.toString();
      for (let j = 1; j <= string.length / 2; j++) {
        if (string.length % j === 0) {
          const times = string.length / j - 1;
          let z = 0;
          for (let k = 1; k <= times; k++) {
            if (string.slice(0, j) === string.slice(j * k, j * k + j)) z++;
          }
          if (z === times) {
            sum += Number(string);
            break;
          }
        }
      }
    }
  }

  console.log(sum);
}

f();
