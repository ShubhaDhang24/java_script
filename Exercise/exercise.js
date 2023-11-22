//Write a JavaScript program to display the current day and time in the following format
const date = new Date();
console.log(date); 

//get current date 
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}-${day}-${year}`;
console.log(currentDate);

let currentDate1 = new Date().toJSON().slice(0, 10);
console.log(currentDate1);

//exercise-2 Write a JavaScript program to determine whether a given year is a leap year.
// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
//const year1 = prompt('Enter a year:');

//checkLeapYear(year1);

//exercise3 Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
function firstSunday () {
    for (var year = 2014; year <= 2050; year++) {
        // Create a Date object for January 1st of the current year
      var d = new Date(year, 0,1);
      if (d.getDay() === 0) {
        console.log('The first day of ' + year + ' is a Sunday');
      }
    }
  }
  
  firstSunday();

  //exercise 4 Write a JavaScript program to convert temperatures to and from Celsius, Fahr-enheit.
  function celToFahr()
  {
    const celcToFahr = (n) => 
    `${n} Celsius is  ${(n * 9 / 5) + 32} Fahrenheit.`; 


  
const n = 20; 
console.log(celcToFahr(n));

  }
  celToFahr()

  //exercise 6 Write a JavaScript program to 
  //remove a character at the specified position in a given string and return the modified string.
  function removeCharacter(position) {
    originalString = "RemovingCharacter";
    newString =
        originalString.substr(0, position - 1)+
        originalString.substr(
            position,
            originalString.length
        );
    console.log(newString);
}
 
removeCharacter(6);

//exercise7 Write a JavaScript program to reverse a given string.
//Function to reverse string
function ReverseString(str) {
    return str.split('').reverse().join('')
}
 
// Function call
console.log(ReverseString("REVERSE STRING"))