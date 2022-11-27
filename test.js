const btn = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const AllClear = document.getElementById("AC");
const dot = document.getElementById("dot");
const evaluate = document.getElementById("equal");
const result = document.getElementsByClassName("screen")[0];
let lastResult = 0;
let currResult = 0;
let lastOp = "";
let cal = 0;

btn.forEach((item) => {
  if (item.getAttribute("class") == "num") {
    item.addEventListener("click", () => {
      if (result.innerText.length !== 15) {
        if (cal !== 1) {
          result.innerText = result.innerText + item.innerText;
          currResult = result.innerText;
        } else {
          result.innerText = "";
          result.innerText = result.innerText + item.innerText;
          currResult = result.innerText;
          cal = 0;
        }
      }
    });
  }
});

btn.forEach((item) => {
  if (item.getAttribute("class") == "op") {
    item.addEventListener("click", () => {
      if (
        result.innerText == "" ||
        result.innerText.charAt(result.innerText.length - 1) == "/" ||
        result.innerText.charAt(result.innerText.length - 1) == "x" ||
        result.innerText.charAt(result.innerText.length - 1) == "+" ||
        result.innerText.charAt(result.innerText.length - 1) == "-"
      ) {
        return;
      }
      currResult = 0;
      lastResult = result.innerText;
      lastOp = item.innerText;
      result.innerText = "";
    });
  }
});

evaluate.addEventListener("click", () => {
  if (lastOp == "/") {
    let calc = Number(lastResult) / Number(currResult);
    result.innerText = calc.toString();
    lastResult = Number(result.innerText);
    cal = 1;
  } else if (lastOp == "x") {
    let calc = Number(lastResult) * Number(currResult);
    result.innerText = calc.toString();
    lastResult = Number(result.innerText);
    cal = 1;
  } else if (lastOp == "-") {
    let calc = Number(lastResult) - Number(currResult);
    result.innerText = calc.toString();
    lastResult = Number(result.innerText);
    cal = 1;
  } else if (lastOp == "+") {
    let calc = Number(lastResult) + Number(currResult);
    result.innerText = calc.toString();
    lastResult = Number(result.innerText);
    cal = 1;
  }
});

clear.addEventListener("click", () => {
  result.innerText = result.innerText.slice(0, -1);
});

AllClear.addEventListener("click", () => {
  result.innerText = "";
  lastResult = "";
  currResult = "";
});

dot.addEventListener("click", () => {
  let counter = 0;
  for (let i = 0; i <= result.innerText.length; i++) {
    if (result.innerText[i] == ".") {
      counter++;
    }
  }
  if (counter <= 0) {
    result.innerText = result.innerText + ".";
  }
});
