// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Array of options for computer to select from
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1,2,3,4,5,6,7,8,9,0]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "[", "]", "`", "{", "|", "}", "~", "/", '"'];
var userChoiceCharArray = []; //empty array pending user selection of characters

var finalPassword = "";

// generatePassword function
function generatePassword() {

// Prompt the user for the required password 
  var userInput = window.prompt("How many characters would you like your password to contain?");
  var passwordLength = parseInt(userInput);

// Validate the user selects a number
  if(isNaN(passwordLength)) {
      window.alert("That is not a number!");
      return;
// Validate the user selects a number between 8 and 128 characters long
  } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128");
      return;
  }

// Request user to confirm type of characters to include in password   
  var lowercaseConfirm = confirm("Click OK to confirm including lowercase characters.");
  var uppercaseConfirm = confirm("Click OK to confirm including uppercase characters.");
  var numericConfirm = confirm("Click OK to confirm including numeric characters.");
  var specialCharConfirm = confirm("Click OK to confirm including special characters.");

// Validate at least one character type has been chosen by user
  if(!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialCharConfirm) {
      window.alert("Password must include at least one type of character");
      return;
  }

// Generate password based on criteria type selected by user 
  if(lowercaseConfirm) {
    userChoiceCharArray = userChoiceCharArray.concat(lowercase);
  }

  if(uppercaseConfirm) {
    userChoiceCharArray = userChoiceCharArray.concat(uppercase); 
  }
  
  if(numericConfirm) {
    userChoiceCharArray = userChoiceCharArray.concat(numeric); 
  }
  
  if(specialCharConfirm) {
    userChoiceCharArray = userChoiceCharArray.concat(specialChar); 
  }

// Generat random password at the length requested by the user
for (index = 0; index < passwordLength; index ++) {
  var randomIndex = Math.floor(Math.random() * userChoiceCharArray.length);
  console.log(randomIndex);
  var randomChar = userChoiceCharArray[randomIndex];
  finalPassword = finalPassword.concat(randomChar);
}
// Display password to the page
return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);