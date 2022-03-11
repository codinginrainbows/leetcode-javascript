// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
//----------------------------------------------------------------------------------------------

function isPalindrome(s) {
  s = s.toLowerCase().replace(/\s+/g, "").trim(); //regex source: https://stackoverflow.com/questions/18065807/regular-expression-for-removing-whitespaces

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while(leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    }
    
    leftPointer ++;
    rightPointer --;
  }
  
  return true;
}

module.exports = isPalindrome;