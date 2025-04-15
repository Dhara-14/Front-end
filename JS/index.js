// console.log("welcome.. Hello Surya");

// var UserName ="SURYA"
// var UserName="dharani"

// let User ="welcome..."
// User ="Surya";


// const Name = "I D M"
// // Name ="ss"
// console.log(Name);

// console.log("welcome....");
// prompt('ENter Your NAme');
// alert('Warinig Server busy');
// confirm('r u sure exit ?'); 


// console.log(prompt("Enter your Name"));
// alert(prompt("Enter your Name")); 

// print()
// close()
// open('idmtechpark')

// let num =20;
// num = num.toString()

// console.log(typeof num);

// let ss = "10"
// ss=parseInt(ss)
// console.log(typeof ss);



// let Name ="    suryaraj       ";

// let Namme = 'IDM';

// console.log(Name.concat(Namme));
// console.log(Name+Namme);

// console.log(Name.indexOf('r'));
// console.log(Name.lastIndexOf('r'));
// console.log(Name.length);
// console.log(Name.repeat(5));
// console.log(Name.toUpperCase());
// console.log(Name.trim());

// Namme[3] = "welcmoe.";

// console.log(Namme);

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.abs(-90));
// console.log(Math.ceil(9.1));
// console.log(Math.floor(90.9));
// console.log(Math.max(90,99));
// console.log(Math.min(90,80));


// console.log(Math.pow(2,5));
// console.log(Math.random());
// console.log(Math.round(4.4));
 



// + - / * %

// =  ==

// === < > <= >= !=

// AND &&   OR ||    NOT !

// ++ --

// XOR Xnor 

// value ? true : fasle
// alert(prompt(prompt("Enter Something")));


// if(10<5){
//     console.log("Welcome...");
    
// }
// else if(10<40){
//     console.log("hello");
    
// }
// else{
//     console.log("the value is wrong");
    
// }

// if(10<50){
//     if(50<60){
//         if(50<70){
//             console.log("welcome..");
            
//         }
//     }
// }

// let a =1;
// switch (a){
//     case 1:
//         console.log("welcome.");
//       break;
      
//     case 2:
//         console.log("runing...");
//         break;

//     case 3:
//         console.log("hello");
//         break;
//     default :
//     console.log("error..");
//      break;

    
        
        
// }


// let NumArray = [1,2,3,4,'s','u','r','y','a',"IDM TECHPARK"];

// console.log(NumArray);
// console.log(NumArray.length);
// // console.log(NumArray.concat(NumArray));
// console.log(NumArray[0]);
// NumArray.push('welcome1')
// NumArray.push('welcome2')
// NumArray.push('welcome3')
// console.log(
// NumArray

// );

// NumArray.pop()
// NumArray.pop()
// console.log(NumArray);

// NumArray.unshift('hello1')
// NumArray.unshift('hello2')
 
// NumArray.shift()
// console.log(NumArray);

// NumArray.splice(3,0,"KIA")

// console.log(NumArray);
// console.log(NumArray.reverce);




// let Ar =[
//     [1,2,3,4,5],
//     [2,3,4,6,[1,2,4,5,['s','u','r','y','a']]]
// ]

// console.log(Ar[1][4][4][0]);


// let obj ={
//     Name:"Surya",
//     Age:12,
//     City :"Erode",
//     Color:"Red",
//     Brother:{
//         Name:"KArthic"
//     }
// }

// console.log(obj.Brother.Name);



let ArrObj = [
    {NAme:"Surya1",Age:12},
    {NAme:"Surya2",Age:12},
    {NAme:"Surya3",Age:12},
    {NAme:"Surya3",Age:12},
    {NAme:"Surya4",Age:12},
    {NAme:"Surya5",Age:12},
    {NAme:"Surya6",Age:12},
    {NAme:"Surya7",Age:12 ,
        Bro:{Name:"Erode",
            City:{NAme:"MAdurai"}
        }},
    {NAme:"Surya8",Age:12},
    {NAme:"Surya9",Age:12},
    {NAme:"Surya10",Age:12},
    {NAme:"Surya11",Age:12},
]

// console.log(ArrObj[7].Bro.City.NAme);
// console.log(ArrObj[0].NAme);

// for(let i=0; i<(ArrObj.length); i++){
//     console.log(ArrObj[i].NAme);
    
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// for(let i=0; i<(ArrObj.length)-1; i++){
//     console.log(ArrObj[i]);
    
// }


// let a=10
// do{
//     a++;
//     console.log(a);
    
// }while(a<20)

// while(a<20){
//     a++;
//     console.log(a);
// if(a==15){
//     break;
// }
    
// }


 
//let b=['D','H','A','R','A','N','I','S','H','R','E','E']
// let b=prompt("Enter Your Name");
// for(let i=0; i<(b.length-1); i++){
//     for (let j = 1; j <= i; j++){
//        console.log(b.repeat(b[i]));

//     }
       
    
// }
 
//Creating a "D" shape using loops in JavaScript can be done by printing characters in a specific pattern. Here's a simple example using nested loops to print a "D" shape with asterisks (*):
// the code
// function printDShape(height) {
    // const height=prompt("Enter number");
    // const width = Math.floor(height / 2) + 1;
    // for (let i = 0; i < height; i++) {
    //     let line = '';
    //     for (let j = 0; j < width; j++) {
    //         if (j === 0 || (i === 0 && j < width - 1) || (i === height - 1 && j < width - 1) || (j === width - 1 && i > 0 && i < height - 1)) {
    //             line += 'D';
    //         } else {
    //             line += ' ';
    //         }
    //     }
    //     console.log(line);
    // }
//}

// Example usage:
//printDShape(10);

//WRITE THE H LETTER
 
// function printHShape(height) {
//     // Ensure the height is an odd number for a symmetrical H
//     //const height = prompt("Enter the Number");
//     if (height % 2 === 0) {
//         height += 1;
//     }
    
//     const width = Math.floor(height / 2) + 1;
    
//     for (let i = 0; i < height; i++) {
//         let row = '';
//         for (let j = 0; j < width; j++) {
//             if (j === 0 || j === width - 1 || i === Math.floor(height / 2)) {
//                 row += 'H';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// Example usage:
// printHShape(7);


//Write letter A
// const printAShape= prompt("Enter the value");
 
// const widthA =Math.floor (printAShape/2)+1;
// for(let i=0; i< printAShape; i++){
//     let letterA = '';
//     for(let j=0; j<widthA; j++){
//         if(j===0 || (i===0 && j<widthA-1) || i === Math.floor(printAShape / 2)){
          
//             letterA += 'A';
//         }
//         else{
//             row += '';
//         }
//     }
// }




// for(let a in ArrObj){
//     console.log(a);
    
// }


// ArrObj.forEach((y)=>{
//     console.log(y);
    
// })


// ArrObj.map((i)=>{
// console.log(i.Age);
// })



//reduce
// ArrObj.reduce((c)=>{
// console.log(c);

// })

// let A=[2,4,6,8,10,12,14,16,18,20];
// A.reduce((d)=>{
//     console.log(d);
    
// })










































































