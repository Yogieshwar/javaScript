// level-1

//q1 Use for loop & while-loop to iterate from 0 to 100 and print only even numbers
//using for loop
// for(let n=0;n<=100;n++){
//     if(n%2==0){
//         console.log(n)
//     }
// }
// //using while loop
// let n=0;
// while(n<=100){
//     if(n%2==0){
//         console.log(n)
        
//     }
//     n++;
// }

//q2 Use for loop & while-loop to iterate from 0 to 100 and print only odd numbers
//using for loop
// for(let n=0;n<=100;n++){
//     if(n%2!=0){
//         console.log(n)
//     }
// }
//using while loop
// let n=0;
// while(n<=100){
//     if(n%2!=0){
//         console.log(n)
        
//     }
//     n++;
// }

//q3 Use for loop & while-loop to iterate from 0 to 100 and print only prime numbers
// Function to check if a number is prime
// function isPrime(num) {
//     if (num < 2) return false; // 0 and 1 are not prime
//     let i = 2;
//     while (i * i <= num) {
//         if (num % i === 0) return false;
//         i++;
//     }
//     return true;
// }

// // Using for loop to iterate from 0 to 100
// for (let number = 0; number <= 100; number++) {
//     if (isPrime(number)) {
//         console.log(number);
//     }
// }


//q4 Use for loop & while-loop  to iterate from 0 to 100 and print the sum of all numbers.
// 


// Using for loop to sum numbers from 0 to 100
//let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// console.log("Sum of numbers from 0 to 100 is:", sum);


//q5 Use for loop & while-loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
// let sumEven=0;
// let sumOdd=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         sumEven +=i;

//     }
//     if(i%2!=0){
//         sumOdd +=i

//     }
// }
// console.log("sum of even numbers: ",sumEven)
// console.log("sum of odd numbers: ",sumOdd)

// q6 Write a program that calculates the factorial of a given positive integer
// let result = 1;
// function factorialIterative(n) {
    
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// factorialIterative(5)
// console.log("factorial is ",result);


// level-2

// Construct for loops that accomplish the following tasks:

// Print the numbers 0 - 20, one number per line.
// for(let i=0;i<=20;i++){
//     console.log(i)
// }

// Print only the ODD values from 3 - 29, one number per line.
// for(let i=3;i<=29;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// for(let i=14;i>=12;i--){
//     if(i%2==0){
//          console.log(i)
//    }

// }

// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// for(let i=50;i>=20;i--){
//     if(i%3==0){
//         console.log(i)
//     }
// }


// Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:

// Print each element of the array to a new line.
// let a=[1, 5, 'LC101', 'blue', 42]
// for(let i=0;i<=4;i++){
//     console.log(a[i])
// }

// Print each character of the string---in reverse order---to a new line
// let str = 'LaunchCode';

// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);

// }

// Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
// let arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// let positiveArray = [];
// let negativeArray = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         positiveArray.push(arr[i]);
//     } else {
//         negativeArray.push(arr[i]);
//     }
// }

// console.log("Positive Array:", positiveArray);
// console.log("Negative Array:", negativeArray);




// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// let evenArray=[];
// let oddArray=[];

// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.

// let evenArray=[];
// let oddArray=[];
// for(let i=0;i<=50;i++){
//     if(i%2==0){
//         evenArray.push(i); 
//     }else{
//         oddArray.push(i); 
//     }
// }
// console.log("Even Array:", evenArray);
// console.log("Odd Array:", oddArray);

// Write a JS code to print a pattern using for loop

// /* 1 
//    1 2 
//    1 2 3 
//    1 2 3 4 
//    1 2 3 4 5 
//    1 2 3 4 5 6 
//    1 2 3 4 5 6 7 
//    1 2 3 4 5 6 7 8 */

// for(let i=1;i<=8;i++){
//     for(let j=1;j<=i;j++){
//         document.write(j," &nbsp; &nbsp;")
//     }
//     document.write("<Br/>" )
    
// }


//write a js code to print  Hollow Square Pattern .
// let rows=5;
// let col=8;
// for(let i=1;i<=rows;i++){
//     for(let j=1;j<=col;j++){ 
//         if(i==1||i==rows || j==1||j==col){
//             document.write("* ")
            
//         }else{
//             document.write(" ")
//         }
//     }    document.write("<br>");
// }
 
