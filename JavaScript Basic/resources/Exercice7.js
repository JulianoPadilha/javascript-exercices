
for(var initialDate = 2014; initialDate <= 2050; initialDate++){
	var date = new Date(initialDate, 0, 1); //Date(year, month, day)

	if(date.getDay() === 0){
		console.log("1º de Janeiro será um domingo no ano de "+ initialDate);
	} 
}