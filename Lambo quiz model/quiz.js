alert("Answer these short questions amigo");
var answer = false;
var user_name = prompt("What is your name amigo?");
alert("Okey "+user_name+" lets get started!");
var user_answer = prompt("Which lamboghini was named after a bull that participated in bull fighting?");
if (user_answer.toUpperCase() === "CENTENARIO" || user_answer.toUpperCase() === "MUCIELAGO" || user_answer.toUpperCase() === "VENON" || user_answer.toUpperCase() === "AVENTADOR") {
	answer = true;
} else if (user_answer.length >= 10) {
	alert("Please type the name of only one of them!!");
}
/*
	} else if (user_answer.toUpperCase() === "MUCIELAGO" || user_answer.toUpperCase() === "VENON" || user_answer.toUpperCase() === "AVENTADOR") {
		answer = true;
	} else if (user_answer.toUpperCase() === "VENON") {
		answer = true;
	} else if (user_answer.toUpperCase() === "AVENTADOR") {
		answer = true;
	}
*/
	
if (answer) {
	alert("correct!! the "+user_answer+" was named after a bull fighter! "+user_name+" you are a natural!!");
} else {
	alert(""+user_answer+"?? Bummer! turns out you aint such a lambo superfan afterall!!");
}