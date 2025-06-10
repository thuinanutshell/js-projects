const checkButton = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");

function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

function inputProcessor(str) {
  let processedInput = removeNonAlphanumeric(str.trim());
  return processedInput.toLowerCase();
}

function palindromeChecker(str) {
  let string = inputProcessor(str);
  let l = 0;
  let r = string.length - 1;

  while (l < r) {
    if (string[l] === string[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
}

checkButton.onclick = function () {
  const userInput = input.value;

  if (userInput.trim() === "") {
    alert("Please input a value");
  } else {
    const isPalindrome = palindromeChecker(userInput);
    if (isPalindrome) {
      result.innerText = "✅ " + userInput + " is a palindrome";
      startConfetti();
    } else {
      result.innerText = "❌ " + userInput + " is not a palindrome";
    }
  }
};
