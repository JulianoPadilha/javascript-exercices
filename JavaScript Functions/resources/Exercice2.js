function isAPolindromeWord(word){
	word.replace(/\s+/g, ''); //replace remove os espaços em branco utilizando regex
	var splitedWord = word.split("");			 // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).

	var result = [];
	for(var i = 0; i < word.length; i++){
		result += splitedWord.pop(i); 
	}

	if(result == word){
		console.log("Is a Polindrome word!");
	} else {
		console.log("It's not a Polindrome word!");
	}
}

isAPolindromeWord("madamsasa");