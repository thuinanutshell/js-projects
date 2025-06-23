const checkButton = document.querySelector("#check-btn")
const clearButton = document.querySelector("#clear-btn")
const input = document.querySelector("#user-input")
const result = document.querySelector("#results-div")

const validFormats = [
  '^1\\s\\d{3}-\\d{3}-\\d{4}$',
  '^1\\s\\(\\d{3}\\)\\s\\d{3}-\\d{4}$',
  '^1\\(\\d{3}\\)\\d{3}-\\d{4}$',
  '^1\\s\\d{3}\\s\\d{3}\\s\\d{4}$',
  '^\\d{10}$',
  '^\\d{3}-\\d{3}-\\d{4}$',
  '^\\(\\d{3}\\)\\d{3}-\\d{4}$',
].map(pattern => new RegExp(pattern));

function validateNumber(number) {
  return validFormats.some(regex => regex.test(number));
}

checkButton.onclick = function() {
  const userInput = input.value.trim();
  if (userInput.length == 0) {
    alert("Please provide a phone number");
  } else {
    if (validateNumber(userInput) === true) {
      result.innerText = "Valid US Number: " + userInput;
    } else {
      result.innerText = "Invalid US Number: " + userInput;
    }
  }
}

clearButton.onclick = function() {
  result.innerText = ""
}