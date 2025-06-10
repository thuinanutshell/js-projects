const button = document.getElementById("convert-btn")
const input = document.getElementById("number")
const output = document.getElementById("output")

button.onclick = onChange

function onChange() {
  if (input.value.length === 0) {
    output.innerText = "Please enter a valid number";
  } else if (input.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumber = numberConverter(input.value);
    output.innerText = romanNumber;
  }
}

function helper(count, oneSymbol, fiveSymbol, tenSymbol) {
  if (count === 0) {
    return "";
  } else if (count === 1) {
    return oneSymbol;
  } else if (count === 2) {
    return oneSymbol + oneSymbol;
  } else if (count === 3) {
    return oneSymbol + oneSymbol + oneSymbol;
  } else if (count === 4) {
    return oneSymbol + fiveSymbol;
  } else if (count === 5) {
    return fiveSymbol;
  } else if (count === 6) {
    return fiveSymbol + oneSymbol
  } else if (count === 7) {
    return fiveSymbol + oneSymbol + oneSymbol
  } else if (count === 8) {
    return fiveSymbol + oneSymbol + oneSymbol + oneSymbol
  } else if (count === 9) {
    return oneSymbol + tenSymbol
  }
}

function numberConverter(number) {
  const order = {
    "thousand": 0,
    "hundred":0,
    "ten":0,
    "unit": 0
  };
  order["thousand"] += Math.floor(number / 1000);
  const remainder1 = number % 1000;
  order["hundred"] += Math.floor(remainder1 / 100);
  const remainder2 = remainder1 % 100;
  order["ten"] += Math.floor(remainder2 / 10);
  const remainder3 = remainder2 % 10;
  order["unit"] += Math.floor(remainder3);

  const thousandPart = helper(order["thousand"], "M", "", "");
  const hundredPart = helper(order["hundred"], "C", "D", "M");
  const tenPart = helper(order["ten"], "X", "L", "C");
  const unitPart = helper(order["unit"], "I", "V", "X");

  const res = thousandPart + hundredPart + tenPart + unitPart;

  return res
}