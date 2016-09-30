function reverseNumber(number){
	var reverse = number.split("").reverse();

	console.log("Original number: " + number);
	console.log("Reversed number: " + reverse.join(""));

}

reverseNumber("12345");