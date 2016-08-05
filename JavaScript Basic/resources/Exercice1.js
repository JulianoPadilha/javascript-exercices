var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date();

console.log("Today is: " + daysOfWeek[day.getDay()]);

if(day.getHours() < 11){
	console.log("Current time is: 0" + day.getHours() + " AM : " + day.getMinutes() + " : " + day.getSeconds());
} else {
	console.log("Current time is: " + day.getHours() + " PM : " + day.getMinutes() + " : " + day.getSeconds());
}
