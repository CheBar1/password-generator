// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 

function generatePassword() {

  var userResponse = window.prompt("How many characters would you like your password to contain?")
  var passwordLength = parseInt(userResponse)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128")
    return
  }

  var lowercase = confirm("Click OK to confirm including lowercase characters.")
  var uppercase = confirm("Click OK to confirm including uppercase characters.")
  var numeric = confirm("Click OK to confirm including numeric characters.")
  var special = confirm("Click OK to confirm including special characters.")
  

//1. Promt the user for the password criteria
//    a. Password length 8 < 128
//    b. lowercase, uppercase, numbers, special characters
//2. Validate the input re character length  & character selected
//3. Generate password based on criteria

//4. Display password to the page
  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//How many characters would you like your password to contain?
//	- force user to select length between 8 and 128 characters, validate, if not meeting it should throw and error

//  Click OK to confirm including lowercase characters.
//  Click OK to confirm including uppercase characters.
//  Click OK to confirm including numeric characters.
//  Click OK to confirm including special characters.