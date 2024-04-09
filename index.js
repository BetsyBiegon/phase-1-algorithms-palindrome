function isPalindrome(word) {
  // Convert the word to lowercase
  const lowercaseWord = word.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the word
  let start = 0;
  let end = lowercaseWord.length - 1;
  
  // Iterate until the pointers meet or cross each other
  while (start < end) {
    // If characters at the pointers are not equal, return false
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }
    
    // Move the pointers towards each other
    start++;
    end--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Initialize two pointers, one at the beginning and one at the end of the word.
  3. Iterate through the word using the pointers until they meet or cross each other.
  4. At each iteration, compare the characters at the pointers.
  5. If the characters are not equal, return false (not a palindrome).
  6. If the loop completes without returning false, return true (palindrome).

  Written explanation:
  - Convert the input word to lowercase to handle case-insensitive comparisons.
  - Initialize two pointers, one at the beginning of the word and one at the end.
  - Move the pointers towards each other while comparing the characters.
  - If at any point the characters at the pointers are not equal, the word is not a palindrome.
  - If the loop completes without finding any unequal characters, the word is a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
