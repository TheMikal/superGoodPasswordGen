// Assigns btn variable to the button on the webpage
var generateBtn = document.querySelector("#generate");

// Add event listener to the generate button
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

  // Prompts and alerts for generators
  // The prompt for password length
  var passwordLength = prompt("How long do you need it to be (8-128 characters):");

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("That is not in the spectrum, try that again. Only 8-128 characters please."))
  }
  // The prompt for numbers 
  var includeNum = confirm("Do you want numbers?");

  // The prompt for uppercase characters
  var includeUppercase = confirm("Would you like uppercase?");

  // The prompt for special characters
  var includeSpecialChars = confirm("Are you feeling special? Huh? Are ya punk? (special characters?)");

  // Create a character pool based on user preferences
  // the password will always have lower case characters in the pool
  var charPool = lowercaseChars;
  // If includes uppercase add it to the character pool
  if (includeUppercase) {
    charPool += uppercaseChars;
  }
  // If includes special characters add it to the character pool
  if (includeSpecialChars) {
    charPool += specialChars;
  }
  // If includes numbers add it to the character pool
  if (includeNum) {
    charPool += numericChars;
  }
  
  // Generate the password using random characters from the character pool
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }
  // Calls the function that writes the password to the webpage dynamically
  writePassword(password);
};



// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

