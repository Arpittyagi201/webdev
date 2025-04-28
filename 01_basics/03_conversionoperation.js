  let score = "33"
 // console.log(typeof score);

 //iski value string aayi hai or  kyuki mujhe operation number par lgane hai isliye mene string ko number mai convert kiya.

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber);//33

  let score1= "33abdwj"
 
let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1); //number

// console.log(valueInNumber1);  *****//NAN(not a number)****

// //33abdwj ye pure number nhi hai toh ye convert toh hojaega lekin iski actual mai value NAN hogi.

let average = null
let valueInNumber2 = Number(average)
// console.log(typeof valueInNumber2);//number
// console.log(valueInNumber2);// 0 (zero)


 let average1 = undefined
 let valueInNumber3 = Number(average1)
// console.log(typeof valueInNumber3);//number

// console.log(valueInNumber3);  ******//NAN *******

// in case of boolean 
//true => type -> Number
//value ->1

//notes
//value            type

//"33" => 33       number
//"33abs"=>NAN      number
//null => 0         number
// undefined =>NAN   number
//true  => 1         ,,

// boolean mai convert kiya hai
let isLoggedIn = "Arpit"
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);//true //false

// conversion in  boolean 
// 1=> true  , 0=> false
// "" => false
// "Arpit" => true 

// string mai conversion 
let someNumber = 33
let stringNumber = String(someNumber)
//console.log(typeof stringNumber);

// ******************* operations *********//
let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);
// console.log(2/3);

let str1 = "Arpit"
let str2 = " Tyagi"

 let str3 = str1 + str2
 //console.log(str3);

 //console.log("1"+2); //12     *** (js mai conversion is tereh se hota hai agar string phle hai toh sbhi ko string mai treate kiya jaega)***

//  console.log("1"+"2");  //12
//  console.log("1"+2+2); //122
//  console.log(1+2+"2"); //32   ***( agar string baad mai hai toh phle conversion hajaega ) ***

// ***** TRICKY Conversion ******

// console.log(+true);  // 1 : reason
//(true apne aap mai boolean hai abhi iska conversion hona hai kyuki hmne increment kiya hai toh increment toh hua nhi conversionhogya ...)

// console.log(-true); // -1
// console.log(+""); // 0

// ***** PREFIX & POSTFIX OPERATION ***
let gamecounter = 100
//gamecounter++
//console.log(gamecounter); //101
++gamecounter
//console.log(gamecounter);//101

// ********postfix increment ****
let x =3;
const y = x++;
//console.log(y); // 3
//console.log(x); // 4 (postfix mai phle value assign baad mai increment)

// **********prefix operation ***
let x1 = 4;
const y1 = ++x1;
//console.log(y1); //5 (prefix mai phle increment baad mai assign)
//console.log(x1); //5



console.log(1+"1");