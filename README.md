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

![palindrome_checker_demo](https://github.com/user-attachments/assets/7a728ab8-610b-4029-86bb-73198fb8213d)

## Roman Numeral Converter Project

## Telephone Number Validator Project

## A Cash Register Project

## RPG Creature Search App Project

