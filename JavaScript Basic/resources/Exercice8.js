var number = Math.floor(Math.random()*10) + 1; //1 is the start number
var userNumber = prompt("Entre com um número entre 1 e 10.");

if(number == userNumber){
	console.log("Yeey! The number matched!");
} else {
	console.log("Sorry! The number did not matched!");
}