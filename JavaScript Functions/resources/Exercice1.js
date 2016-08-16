function reverseNumber(){
	var number = "32243";
	var reverse = number.split("");

	console.log(reverse);

	var result = [];
	for(var i = 0; i < number.length; i++){
		result += reverse.pop(i); 
	}
	console.log(result);	
}

reverseNumber();