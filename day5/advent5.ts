import { input } from "./input5";

function f() {
  const splitInput = input.split("\n\n");
  const ranges = splitInput[0].split("\n").map((range) => range.split("-").map((border) => Number(border)));
  const availableIng = splitInput[1].split("\n").map((ing) => Number(ing));
  let fresh = 0;

  for (const ing of availableIng)
    for (const [low, high] of ranges)
      if (ing >= low && ing <= high) {
        fresh++;
        break;
      }

  console.log(fresh);
}

f();
