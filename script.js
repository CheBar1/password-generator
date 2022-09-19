// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Array of options for computer to select from
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1,2,3,4,5,6,7,8,9,0]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "[", "]", "`", "{", "|", "}", "~", "/", '"'];
var myArrays = [lowercase, uppercase, numeric, specialChar]

// generatePassword function
function generatePassword() {

// Promt the user for the required password 
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

// Generate password based on criteria
  if(lowercaseConfirm) {
    var index = Math.floor(Math.random() * lowercase.length);
  }

  if(uppercaseConfirm) {
    var index = Math.floor(Math.random() * uppercase.length);
  }
  
  if(numericConfirm) {
    var index = Math.floor(Math.random() * numeric.length);
  }
  
  if(specialCharConfirm) {
    var index = Math.floor(Math.random() * specialChar.length);
  }


// Display password to the page
  return "sorry, still working on the code... can't quite work out how to get the random selection to generate.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);