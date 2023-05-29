function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join(''); // Reverse the input word
  
  // Compare the reversed word with the input word
  if (reversedWord === word) {
    return true; // It is a palindrome
  } else {
    return false; // It is not a palindrome
  }
}

// Add your own custom test cases here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("level"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("noon"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hello"));

module.exports = isPalindrome;
