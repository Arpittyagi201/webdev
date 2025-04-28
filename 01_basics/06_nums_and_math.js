const score = 400
 //console.log(score);
const balance = new Number(100)
 //console.log(balance);

// number ko string mai convert kiya or string ki property ko use kiya..
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));// fixed k baad kitni zero deni hai uske liye 1 likha hai ..

//console.log(balance.toLocaleString());

// toPrecision method
const otherNumber = 123.8966
 //console.log(otherNumber.toPrecision(2));

// toLocalString method 

const hundreds = 1000000 //10,00,000
//console.log(hundreds.toLocaleString()); //locale method used to make representation easy




//******Maths ****************/

//console.log(Math);//object [Math]{}

// math ye ek object hai iski aandhar bhut saari property hai

//console.log(Math.abs(-4));//4 

// abs absolute value hai ye -ve value ko +ve bna deta hai sign change karta hai siff -ve to +ve lekin +ve se -ve nhi krta..

//console.log(Math.abs(5));//5
// console.log(Math.round(3.4));//3
// console.log(Math.round(3.8));//4

// agar mujhe control karna hai ki value roundoff hone k baad upper wali ya lower wali konsi choose hogi  uske liye 2 method.

//console.log(Math.ceil(3.4)); //4
//console.log(Math.floor(4.999));//4
// console.log(Math.sqrt(25));//5
// console.log(Math.pow(4,2));//16
// console.log(Math.max(30,56,21));//56
// console.log(Math.min(30,45,2,56));//2

// console.log(Math.max(-1,-3,-4));//-1
// console.log(Math.min(-1,-3,-4));//-4

// console.log(Math.cbrt(64));//4
// console.log(Math.cbrt(-9));//-2.080
//Math.cbrt() ek static method hai or ye cube root return karta hai number ka..


//console.log(Math.PI);//3.14
// Math.PI ek static data property hai represent karti hai ratio of the circumference of a circle to its diameter..

//console.log(Math.random(3));//0.5497
//Math.random() static method return a floating point,pseude random number that's greater than or equal to 0 and less than 1.

//console.log(Math.random())

//console.log((Math.random()*10)+1); // +1 krne se min value 1 aaege , zero toh nhi aane ki..

//console.log(Math.floor(Math.random()*10)+1); 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)) +min );
