//Doubt Code

//Left triangle

// let n=prompt("Enter the number");
// for(let i=0; i<=n; i++){
//     for (let j = 1; j <= i; j++) {
//     console.log("*".repeat(i));
//     } 
// }

//Another way of left triangle
// let o=prompt("Enter the number");
// for(let i=1; i<=o; i++){
//     console.log("*".repeat(i));
    
// }
/*
let o=prompt("Enter the number");
for(let i=1; i<=o; i++){
    console.log("* ");
    
}*/


// var n = prompt("Enter number:");
// var stars = "";  // Initialize an empty string

// for (var i = 1; i <= n; i++) {
//     stars += "* ";  // Append one star for each iteration
//     console.log(stars);  // Print the current number of stars
// }

//Correct Code

//Draw a Triangle
// let rows = 5;
// let triangle = '';

// for (let i = 1; i <= rows; i++) {
//     for (let j = 0; j < i; j++) {
//         triangle += '* '; 
//     }
//     triangle += '\n';
// }

// console.log(triangle);


let num=5;
for(let i=0; i<=5; i++){
    console.log("*".repeat(i));
}

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




