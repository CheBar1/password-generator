// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from


function generatePassword() {

  // Promt the user for the password criteria
  var userInput = window.prompt("How many characters would you like your password to contain?");
  var passwordLength = parseInt(userInput);

  // Validate the user selects a number
  if(isNaN(passwordLength)) {
    window.alert("That is not a number!");
    return;
  } else {
    window.alert("That is a valid number!");
  }
  
  // Validate the user selects a number between 8 and 128 characters long
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128");
    return;
  }

  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  var numeric = confirm("Click OK to confirm including numeric characters.");
  var special = confirm("Click OK to confirm including special characters.");
  
  

 

 
//3. Generate password based on criteria

//4. Display password to the page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);