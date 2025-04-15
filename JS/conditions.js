//1. check the given number is positive or negative 
let nu = prompt("Enter the Number");
if (nu > 0) {
    console.log("The number is positive.");
}
else if (nu < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}

//2.check the two values-grater than or less than
let a = 5;
let b = 7;
if (a > b) {
    console.log("5 is lesser than 7");
}
else {
    console.log("7 is greater than 5");
}

//3.Weekdays name from number
let day = 'Wednesday';
switch (day) {
    case 'Sunday':
        console.log(1);
        break;
    case 'Monday':
        console.log(2);
        break;
    case 'Tuesday':
        console.log(3);
        break;
    case 'Wednesday':
        console.log(4);
        break;
    case 'Thursday':
        console.log(5);
        break;
    case 'Friday':
        console.log(6);
        break;
    case 'Saturday':
        console.log(7);
        break;

    default:
        console.log("This is not a day");

}










//4.Given data vowels or consonants
let vow = 'a';
switch (vow) {
    case 'a':
        console.log('a is a vowel');

        break;
    case 'e':
        console.log('e is a vowel');

        break;
    case 'i':
        console.log('i is a vowel');

        break;
    case 'o':
        console.log('o is a vowel');

        break;
    case 'u':
        console.log('u is a vowel');

        break;

    default:
        console.log("given letter is Consonant");

        break;
}

//5.check leap year
let year = 2002;
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log("This is the leap year");
}
else {
    console.log("This is not a leap year");

}

//6.Display the first ten natural numbers

for (let i = 1; i < 11; i++) {
    console.log(i);

}


//7.Given number is divisible by 5 and 11
let num = 55;
if (num % 5 == 0 && num % 11 == 0) {
    console.log("The Number" + num + "is divisible by 5 and 11");
}
else {
    console.log("The Number" + num + "isn't divisible by 5 and 11");
}


//8.Given data is a string or number

let dt = prompt("Enter the number or Name");
if (typeof dt === 'string') {
    console.log('This is a string');
}
else {
    console.log('This is a Number');
}

//9.Check the alphabet number or special character

const code = char.charCodeAt(0);
code = prompt("Enter Alphabet , Number ,Special character");
if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return 'Alphabet';
}
else if (code >= 48 && code <= 57) {
    return 'Number';
}
else {
    return 'Special Character';
}




//10.Grade System

// let score = prompt("Enter Your Score");
// if (score >= 90) {
//     return 'A';
// }
// else if (score >= 80) {
//     return 'B';
// }
// else if (score >= 70) {
//     return 'C';
// }
// else if (score >= 60) {
//     return 'D';
// }
// else {
//     return 'F';
// }

//11.Convert celsius to f
let celsius = prompt("Enter the Celsius value ");
Fahrenheit = (celsius * 9 / 5) + 32;
console.log(Fahrenheit + "F");

//12.Swapping two numbers without third variable
let c = 5;
let d = 10;

c = c + d;
d = c - d;
c = c - d;

// console.log(`a: ${a}, b: ${b}`); // Output: a: 10, b: 5
console.log("c:" + c, "d:" + d);







//2. Square Shape
let size = 5;
let square = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        square += '* ';
    }
    square += '\n';
}

console.log(square);


//3. Diamond Shape

let n = 5;
let diamond = '';

// Upper part
for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
        diamond += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        diamond += '*';
    }
    diamond += '\n';
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
    for (let j = n; j > i; j--) {
        diamond += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        diamond += '*';
    }
    diamond += '\n';
}

console.log(diamond);
//These examples use nested loops to construct different shapes. You can adjust the rows or size variables to change the dimensions of the shapes. Enjoy experimenting with these patterns!







//How to print the letter I







