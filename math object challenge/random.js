alert("Hey there thank you for visiting, lets get started!");
var user_min = prompt("what is the minimum number you would like generated?");
user_min = parseInt(user_min);
var user_max = prompt("What is the maximum number you would like generated?");
user_max = parseInt(user_max);
alert("All done, your number is " + Math.floor(Math.random() * (user_max - user_min + 1) + user_min));