var isALeapYear = function(year){
	var date = new Date(year, 2, 0).getDate();

	if(date == 29){
		console.log("Ano Bissexto");
	} else {
		console.log("Ano não Bissexto");
	}
}

isALeapYear(2015);

