module.exports = function check(str, bracketsConfig) {

  // Set environment variable equal to str length
  let strLength = str.length;
  // Set environment variable equal to bracketsConfig length
  let bracketsConfigLength = bracketsConfig.length;

  // Iter amount of iterations
  for (let i = 0; i < strLength; i++) {
    // Iterate over elements of bracketsConfig
    for (let j = 0; j < bracketsConfigLength; j++) {
      // Set current brackets pair through concantenation
      // of the current index of j[0] and i[1]
      let currentBracketsPair = bracketsConfig[j][0] + bracketsConfig[j][1];
      // Check if current brackets pair exists in str
      if (str.includes(currentBracketsPair)) {
        // Replace matching pair with an empty string
        str = str.replace((currentBracketsPair), '');
      }
    }
  }
  // If nothing left return true
  if (str === '') {
    return true
  // If any unpaired symbols left return false
  } else {
    return false
  }
};