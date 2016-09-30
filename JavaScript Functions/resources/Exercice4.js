function alphabeticalOrder(word){
	var splitedWord = word.split("");

	var sortedWord = splitedWord.sort(); //Organiza as letras em ordem alfabetica | array

	var result = [];
	for(var i = 0; i < word.length; i++){
		result += sortedWord.shift(i);
		console.log(result);
	}
}

alphabeticalOrder("webmaster");