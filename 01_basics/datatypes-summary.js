// javascript is dynamic type language

//  Primitive Datatype (call by value)

// 7 types : string,number,boolean,null,undefined,symbol,Bigint
const score = 100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol declare karne k tarika
const id = Symbol('123')
const anotherId =Symbol('123')
//console.log(id===anotherId);//false(same value dene k baad bhi id same nhi hai that means symbol uniqueness show kar rha hai)

const bigNumber = 3447340973988556668n //bigint (agar number kuch jyada bda ho jae toh uske end mai n lga dena hai voh bigint mai convert ho jaata hai)

// **************NON PRIMITIVE ******

//Reference(non primitive)

// Array,objects,functions

const city = ["roorkee","haridwar","rishikesh"];  // array declare 

//object {}braces k aandhar show hota hai key value pairs ki form mai..data type kuch bhi ho sakta hai like string,number,boolean,koi dushra object bhi...
let myobj = {
    name : "Arpit",  // object declaration
    age : 22,
}

// ******Function ********
 const myFunction =function() {
  // console.log("Hello world");
 }
// console.log(typeof myFunction);//function

// console.log(typeof isLoggedIn);//boolean
// console.log(typeof outsideTemp);//object
// console.log(typeof scoreValue);//number
// console.log(typeof id)//symbol
// console.log(typeof myobj)//object
// console.log(typeof city)//object

//***************Memory *//
//1. stack memory (use in primitive data type) , Heap (use in non primitive)

let myYoutubename = "Arpittyagidotcom"
let anothername = myYoutubename
anothername = "Chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@okicici"
}
let userTwo = userOne
userTwo.email = "Arpit@google.com" //user 2 mai mujhe email change karni hai toh object mai hum .email (.value)k through access karte hai

console.log(userOne.email);
console.log(userTwo.email);