var string = "w3resource";
var result = string.split(""); //Split a string into an array of substrings.

var test = [];
for(var i = 0; i < string.length; i++){
	test += result.pop(i); //pop() remove o último item do array e retorna ele.
}

console.log(test); // Nova string contendo nossa string origial escrita ao contrário.
console.log(result); // Vira uma array vazio.
console.log(string); // String original
