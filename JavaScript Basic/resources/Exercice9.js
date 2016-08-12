var date = new Date();
var natal = new Date(date.getFullYear(), 11, 25); //The getFullYear() method is used to get the year of the specified date according to local time. The value returned by the method is an absolute number. For dates between the years 1000 and 9999, getFullYear() returns a four-digit number, for example, 1985.

var one_day = 1000 * 60 * 60 * 24;

console.log(Math.ceil((natal.getTime() - date.getTime()) / one_day)); 
// The getTime() method is used to get the numeric value corresponding to the time for the specified date according to universal time.

// The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.