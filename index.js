function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i < word.length / 2; i++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}


// .....
/*Let's take this one step at a time. First, we need a way to iterate from the beginning of the string to the middle. We can identify the middle of the string using its length:
 To calculate j, we can use the length of the word minus one to get the last letter of the word, and then subtract i, so as i increases, j will decrease
 Now that we can access the corresponding letters from the beginning and end of the string, we just need to check if they match
 Now if any letters don't match, we'll stop looping and exit the function early with a return value of false. Our last step is to return true once we reach the end of the loop, since at that point we'll have compared all the letters

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
