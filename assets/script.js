// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  event.stopPropagation();
  generatePassword();
});


// Function to generate password
function generatePassword(passwordLength, includeUppercase, specialChars, numericChars) {
  // Define character sets based on user preferences
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()';

  // prompts and alerts for generators
  // Prompt for password length
  var passwordLength = prompt("How long do you need it to be (8-128 characters):");

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("That is not in the spectrum, try that again. Only 8-128 characters please."))
  }
  // Prompt for numbers 
  var includeNum = confirm("Do you want numbers?");

  // Prompt for uppercase characters
  var includeUppercase = confirm("Would you like uppercase?");

  // Prompt for special characters
  var includeSpecialChars = confirm("Are you feeling special? Huh? Are ya punk? (special characters?)");

  /* Generate the password based on user input
  var password = generatePassword(passwordLength, includeUppercase, includeSpecialChars, includeNum);
  console.log(password); */

  // Create a character pool based on user preferences
  var charPool = lowercaseChars;
  if (includeUppercase) {
    charPool += uppercaseChars;
  }
  if (includeSpecialChars) {
    charPool += specialChars;
  }
  if (includeNum) {
    charPool += numericChars;
  }
  
  // Generate the password using random characters from the character pool
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }
  writePassword(password);
};



// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

