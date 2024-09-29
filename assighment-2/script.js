//q1
// const FirstName= "yogieshwar";
// const LastName= "Konne";
// const Country= "India";
// const City= "Siddipet";
// const Age= 22;
// const IsMarried= "false";
// const year= 2024;
// document.write(typeof(FirstName));
// document.write(typeof(LastName));
// document.write(typeof(Country));
// document.write(typeof(City));
// document.write(typeof(Age));
// document.write(typeof(IsMarried));
// document.write(typeof(year));

//q2
//  let a= typeof '10';
//  let b= 10;
//  let result= (a==b)? "equal":"not equal"
//  console.log(result);
// o/p:not equal
//q3
//  let a= parseInt('9.8');
//  let b= 10;
//  let result= (a==b)? 'equal':'not equal';
//  console.log(result);
// o/p:not equal
//q4
// let a=10;
// let b=20;
// console.log((a<b)? true:false);
// console.log((a>b)? true:false);
//q5
//  x= 10;
// var y= 15;
// var z= 6;
// var a,b,c;
// x+=2*y;
// console.log("x value is",x);//40
// y-=x/--z;
// console.log("y value is",y);//7
// z+=x--+5;
// console.log("z value is",z);//50
// y/=z+2;
// console.log("y value is",y);//
// x*=++y-z--;
// console.log("x value is",x);

//Q6
// console.log((4>3)? true:false);//true
// console.log((4>=3)? true:false);//true
// console.log((4<3)? true:false);//false
// console.log((4<=3)? true:false);//false
// console.log((4==4)? true:false);//true
// console.log((4===4)? true:false);//true
// console.log((4!=4)? true:false);//false
// console.log((4!==4)? true:false);//false
// console.log((4!='4')? true:false);//false
// console.log((4=='4')? true:false);//true
// console.log((4==='4')? true:false);//false
//q7
// console.log((4>3&&10<12)? true:false);//true
// console.log((4>3&&10>12)? true:false);//false
// console.log((4>3||10<12)? true:false);//true
// console.log((4>3||10>12)? true:false);//true
// console.log(!(4>3)? true:false);//false
// console.log(!(4<3)? true:false);//true
// console.log(!(false)? true:false);//true
// console.log(!(4>3&&10<12)? true:false);//false
// console.log(!(4>3&&10>12)? true:false);//true
// console.log(!(4==="4")? true:false);//true



//level2


//q1
//  let userInputbase= prompt("Enter base value");
//  let userInputheight= prompt("Enter height value");
//  let base= parseInt(userInputbase);
//   let height= parseInt(userInputheight);
//   let area= 0.5*base*height;
//   console.log("Area of triangle is : ",area);
//   o/p:Area of triangle is :  5

//q2
// let userInputa= prompt("Enter A value");
// let userInputb= prompt("Enter B value");
// let userInputc= prompt("Enter C value");
// let a= parseInt(userInputa);
// let b= parseInt(userInputb);
// let c= parseInt(userInputc);
// let perimeter= a+b+c;
// console.log("perimeter of triangle is:",perimeter);

//q3
// let userInputlength= prompt("Enter length value");
// let userInputwidth= prompt("Enter width value");
// let length= parseInt(userInputlength);
// let width= parseInt(userInputwidth);
// let area= length*width;
// let perimeter= 2*(length+width);
// console.log("Area of rectangle :",area);
// console.log("perimeter of rectangle :",perimeter);

//q4
// let userInputradius= prompt("Enter radius value");
// let radius= parseInt(userInputradius);
// let pi= 3.14;
// let area= pi*radius*radius;
// let circum= 2*pi*radius;
// console.log("Area of circlr: ",area);
// console.log("circumference of circle :",circum);

//q5
//q6
//q7
// let userInputhours= prompt("Enter hours");
// let userInputrate= prompt("Enter rate per hour");
// let hours= parseInt(userInputhours);
// let rate= parseInt( userInputrate);
// let pay= hours*rate;
// console.log("pay is:",pay);

//q8,q9
// let userInputa= prompt("Enter one value");
// let userInputb= prompt("Enter one value");
// let a= parseInt(userInputa);
// let b= parseInt(userInputb);
// let sum= a+b;
// console.log("sum is ",sum);
// let div= a/b;
// console.log(" division is ",div);

//q10
// let a=5;
// let b=7;
// let c=3;
// let d=9;
// let e=1;
// let avg= a+b+c+d+e;
// console.log("Average is",avg);

//q11
// let userInputsec= prompt("Enter seconds");
// let sec= parseInt(userInputsec);
// let hours= sec/3600;
// console.log(hours,"hours");

//q12

// let userInputmeters= prompt("Enter meters");
// let meters= parseInt(userInputmeters);
// let milliM= meters*1000;
// console.log(milliM,"Milli Meters");

//q13
// let userInputrupees= prompt("Enter rupees");
// let rupees= parseInt(userInputrupees);
// let dollar= rupees/83.89;
// console.log(dollar,"Dollars");

//q14
// let userInputp= prompt("Enter Amount you borrowed");
// let userInputr= prompt("Enter  rate of intrest");
// let userInputt= prompt("Enter period of time");
// let p= parseInt(userInputp);
// let r= parseInt(userInputr);
// let t= parseInt(userInputt);
// let intrest= (p*r*t)/100;
// console.log("intrest",intrest);

//q15

// let a= 10;
// let b= 5;
// console.log((a>b)? "a is greater than b":"a is less than b");

//q16

// let userInputn= prompt("Enter a number");
// let n= parseInt(userInputn);
// console.log((n%2==0)? "Given number is even":"Given number is odd");

//q17

// let userInputn= prompt("Enter a number");
// let n= parseInt(userInputn);
// console.log((n>0)? "Given number positive":"given number is negative");

//q18

// let userInputn= prompt("Enter a number");
// let n= parseInt(userInputn);
// console.log((n%5==0)? "Given number divisible by 5":"Given number not divisible by 5");

//q19

// let userInputn= prompt("Enter a number");
// let n= parseInt(userInputn);
// console.log((n%2==0)? "Given number divisible by 2":"Given number not divisible by 2");
// console.log((n%3==0)? "Given number divisible by 3":"Given number not divisible by 3");
// console.log((n%4==0)? "Given number divisible by 4":"Given number not divisible by 4");


//q20

let userInputyear= prompt("Enter a number");
let year= parseInt(userInputyear);
console.log((year%400==0)||((year%100!=0)&&(year%4==0))? "Given year is leap year":"Given year is not leap year");




