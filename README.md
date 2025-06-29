# JavaScript Projects
5 projects I built for the [freeCodeCamp JavaScript Algorithms and Data Structures Certificate](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-fetch-and-promises-by-building-an-fcc-authors-page)
## Table of Contents
- [Palindrome Checker](#palindrome-checker)
- [Roman Numeral Converter Project](#roman-numeral-converter-project)
- [Telephone Number Validator Project](#telephone-number-validator-project)
- [A Cash Register Project](#a-cash-register-project)
- [RPG Creature Search App Project](#rpg-creature-search-app-project)

## Palindrome Checker
This project helped me review the two-pointer algorithm to check for a palindrome (which has a time complexity of O(n)) and some CSS styles to center the body horizontally and vertically on a page using flexbox. When building this project, there was a bug with the DOM object and its value when I tried to check if the input is empty (remember to use `input.value` to access the content of the DOM object `input`.
### Key Takeaways
- In order to center a body that consists of many other elements, like div, p, etc., we can use the flexbox layout mode (`display: flex`) that enables us to manipulate elements within the container.
- `justify-content: center` means centering the object horizontally.
- `align-items: center` means centering the object vertically.
- `flex-direction: column` means stacking the elements vertically (without this, all elements in the body will be placed side by side).
- Why use the two-pointer approach to check if a word is a palindrome? This is because if we look at the structure of a palindrome, we can see that the pairs of opposite characters have to be the same. The first character has the be the same as the last character, the second character has to be the same as the second last character, and so on. Using two pointers to check this condition and moving them accordingly will lead to a condition where the left and right pointers point at the same character. This is when we know that the word/phrase/sentence is a palindrome.
## Roman Numeral Converter Project
### Key Takeaways
Always pay attention to patterns by analyzing multiple examples if you are stuck. I think this is more of an induction approach to come up with the conversion algorithm. If you perform some conversion by hand from integers to Roman numerals, you will notice the following pattern:
- For 1-3, the numerals are the sum of all one symbols (I)
- For 4, the numeral is (I + V, the I symbol comes before)
- For 5, it's simply V
- For 6-8, it's the sum of V and a multiple of one symbol
- For 9, it's IX
As a result, to form the unit part of a number (the last part of the number), it is the combination of 3 symbols: I, V, X. The same pattern works for the ten part (X, L, C), hundred part (C, D, M) and the thousand part is the special one (M, "", "").

## Telephone Number Validator Project
This project helped me review a few regex rules (basically a string pattern matching rule). The logic required for this one is easier than the previous two projects. The hard part is coming up with the 7 regex rules for the US phone number. Some useful syntax I've learned while building this project are:
- Create a RegExp object pattern string
```javascript
RegExp(pattern)
```
- The `arr.map() method`: Creates a new array by calling a provided function ("callback function") on every element in the original array.
- The `some()` method in an array that tests whether **at least one element** in the array **passes the test** implemented by the provided function. It returns a boolean value: true if the callback function returns a truthy value for any element in the array, and false if it returns a falsy value for all elements.
```javascript
const arr = [1, 2, 3, 4]

// check if at least one element is odd
const hasOdd = arr.some(elem => elem % 2 === 1)
```
- `test()`: used to check if a regular expression finds a match within a given string.
```javascript
function validateNumber(number) {
  return validFormats.some(regex => regex.test(number));
}
```
## A Cash Register Project
This project helps reinforce my algorithmic thinking skills, which actually reminds me of how things that sound very simple to humans require precise language and more concrete translation to the machine. I also got the chance to review some useful methods in JS, such as `filter()` and `map()`. I started this project by outlining the algorithm with a pen and paper. The instruction only provided me with a list of cash in drawer (CID), and then I did some division and noticed a pattern:
- When a customer inputs the total amount of money, we first need to calculate the remaining cash by subtracting the price from the total.
- If the price > total, the customer does not have enough money to pay
- If the price < total, we have a positive remaining
- Then, we will divide the remaining by 100 first, take the quotient (the number of units needed), and take the minimum between the available units and the units needed
- After that, we continue to subtract the remaining to the amount used and store the name of the currency with the amount used.
- Repeat this process for all other currencies.
```javascript
for (let [name, value] of denominations) {
    let unitsAvailable = nums[name];
    let unitsNeeded = Math.floor(remaining / value);
    let unitsUsed = Math.min(unitsAvailable, unitsNeeded);

    if (unitsUsed > 0) {
      let amountUsed = roundToTwo(unitsUsed * value);
      remaining = roundToTwo(remaining - amountUsed);
      change.push([name, amountUsed]);
    }
  }
```
## RPG Creature Search App Project
This project helps reinforce my understanding of api calls and fetches. It also reminds me of the importance of the structure of the JSON as the response returned from the API call because it helps us extract the information correctly for the frontend.



