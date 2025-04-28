const name = "Arpit" //string declare
const repoCount = 50
//string concat karne ka trika
//console.log(name + repoCounr + "value");  ( old method for string concat)

//console.log(`${name} ${repoCount}`);

//console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

// modern ways syntax for string concat (isko string interpollution bolte hai use karne ka benifit ye hai ki ye placeholder bnata ha jha hm directly variable ka naam rkhte jaate hai)

// other syntax for string declaration using new keyword and objects of javascript
const gameName = new String('hiteshhc')

//console.log(gameName[3]);//key value access

//prototype access
//console.log(gameName.__proto__);

 //console.log(gameName.length);//8
//  console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());


// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('s'));//4

const newString = gameName.substring(0,4)
//console.log(newString); // Arpi
const anotherString = gameName.slice(-8,4) //hite
 //console.log(anotherString);

 //note : negative value use only in slice not substring . agar -ve value substring mai di toh ye ignore karke 0 se start hoga or slice k case mai reverse se start hoga...

 const newStringOne = "   hitesh  "
//  console.log(newStringOne);
//  console.log(newStringOne.trim());

 const url = "https://hitesh.com/hitesh%20choudhary"

//  console.log(url.replace('%20','-'));

 //console.log(url.includes('hitesh')); // true (check karte hai ki ye string url mai h ya nhi)

 const gameNameOne = new String('hitesh-hc-com')

 //console.log(gameNameOne.split('-'));
 // string ko array mai convert karne ka method.. ( output : ['hitesh','hc','com'])

 // *********** string methods *********

// trim() or trimStart(),trimEnd()
 let str = "   foo  ";
 //console.log(str.length);//8
 //str = str.trimStart();
//  console.log(str.length);//5
//  console.log(str); //foo
str = str.trimEnd();
// console.log(str.length); //6
//   console.log(str); //   foo

// concat()

const letters = ['a','b','d']
const numbers = [1,2,3,4,5,6,7]
 const alphaNumeric =letters.concat(numbers)
 //console.log(alphaNumeric );

 //charAt()

 const collegeName = "abes" ;
 const index = 2;
//  console.log(collegeName.charAt(index));

//endsWith()

const str2 = "abes,engineering,college.";
 console.log(str2.endsWith("college."));
 console.log(str2.endsWith("b",2));
