import inputString from "./input1.js";

function f() {
  let password = 0;
  let position = 50;
  const inputArray = inputString.split("\n");
  const inputArrayTrimmed: string[] = [];
  inputArray.forEach((s) => inputArrayTrimmed.push(s.trim()));

  for (let i = 0; i < inputArrayTrimmed.length; i++) {
    const e = inputArrayTrimmed[i];
    const num = Number(e.slice(1));

    let extra = 0;

    if (e.startsWith("L")) {
      const newPosition = position - num;

      if (newPosition >= 0) {
        if (newPosition === 0) extra++;
        position -= num;
      } else {
        extra += Math.trunc(newPosition / -100) + 1;
        if (position === 0) extra--;
        position = ((newPosition % 100) + 100) % 100;
      }
    } else {
      extra += Math.trunc((position + num) / 100);
      position = (position + num) % 100;
    }

    password += extra;
  }

  console.log(password);
}

f();
