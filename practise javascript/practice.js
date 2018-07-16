// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."

// code starts here.
var name = prompt("Write the name you desire your child to have");
var sirName = prompt("Enter your sirname");
var allCaps = name.toUpperCase() + " " + sirName.toUpperCase();
console.log(allCaps);
var summed_up = allCaps.length;
console.log(summed_up);
//var message = "The string ";
//message += allCaps;
//message += " is ";
//message += summed_up;
//message += " characters long";
//alert(message);
alert("The string \"" + allCaps + "\" is " + summed_up + " characters long.");
console.log("program excecuted successfully");









