
function nameEvaluation() {
	var fieldValue = username;
	if (fieldValue === "") {
		return "empty";
	} else if (fieldValue.length > 10) {
		return "long name";
	} else if (fieldValue === null) {
		return "attempted skip";
	} else {
		return fieldValue;
	}
	
}
var username;
var email;
var age;

function namePrompt() {
 username = prompt("Hello what is your name?");
}

namePrompt();


if (nameEvaluation() === "empty") {
	alert("Please type in your name");
	namePrompt();
} else if (nameEvaluation() === "long name") {
	alert("Name too long, please type a valid name");
	namePrompt();
} else if (nameEvaluation() === "attempted skip") {
	alert("Your name is required before you continue");
	namePrompt();
}

alert("Nice name "+nameEvaluation().toUpperCase()+"");

alert("Ready?");

function dimensions(length, width) {
	var answer = length * width;
	return answer;
}
var units = prompt("what units are you using?");
var user_length = prompt("Okey give me the length of your rectangle");
if (parseInt(user_length) === 0) {
	alert("You cannot have 0 for a length!!");	
} else if (isNaN(user_length)) {
	alert("Thats not a number!! please type a number!!");
} else if (user_length === "") {
	alert("We have to have a length in a rectangle!!!");
} else {
	var user_width = prompt("Okey give me a width");
	if (parseInt(user_width) === 0) {
		alert("You cannot have 0 for a width!!");
	} else if (user_width === "") {
		alert("We have to have a width in a rectangle!!!");
	} else if (isNaN(user_width)) {
		alert("Thats not a number!! please type a number!!");
	} else {
		
		alert("The area of your rectangle is "+dimensions(user_length, user_width)+" "+units+"" );
	}
}







