// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = [",", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "~", "<", ">", ".", "/", "?", ":", ";", "{", "}", "[", "]", "|"]




function generatePassword() {
  var passwordlength = prompt("How long do you want your password to be?");
  passwordlength = parseInt(passwordlength);
  console.log(passwordlength);
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return;
  }
  var asklowercase = confirm("Would you like lowercase characters?");
  var askUppercase = confirm("Would you like uppercase characters");
  var askspecial = confirm("Would you like special characters?");
  var asknumber = confirm("Would you like numbers?");
  if (asklowercase === false && askUppercase === false && askspecial === false && asknumber === false) {
    alert("You must have at least 1 type of character?");
    return;
  }

  var passwordcharacter = [];
  if (asklowercase === true) {
    passwordcharacter = passwordcharacter.concat(lowercase);
  }
  if (askUppercase === true) {
    passwordcharacter = passwordcharacter.concat(uppercase);
  }
  if (asknumber === true) {
    passwordcharacter = passwordcharacter.concat(number);
  }
  if (askspecial === true) {
    passwordcharacter = passwordcharacter.concat(special);
  }
  var item = passwordcharacter[Math.floor(Math.random() * passwordcharacter.length)];
  var passwordselector = [];

  for (var i = 0; i < passwordlength; i++) {
passwordselector.push(passwordcharacter[Math.floor(Math.random() * passwordcharacter.length)]);
  }
  passwordselector = passwordselector.join("");
  return passwordselector;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);