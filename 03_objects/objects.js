//object ko declare krne k 2  trikee h ek literal ki trah or ek constructor ki trahh.

// singleton

//jabhi bhi hm object ko literal ki trahh declare krtehai toh singleton nhi bnta .. lekin constructor k case mai hmesha singleton bnega..****IMP POINT***

// object ko bnane ka trika **(object.create)** ye 2nd trika hai..isi ko bola jaata hai constructor method k through or iske hi  aandhar singleton bnta hai.


// object literals

const mySym = Symbol("Key1")
const JsUser = {
    name : "Arpit",
    "full name": "Arpit Tyagi",
    [mySym]: "myKey1",
    age : 18,
    location: "Roorkee",
    email: "arpit@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday"," Saturday"]
}
// ****IMP Point object ko access krne k trike

 //console.log(JsUser.email);// dot k saath email ko string ki trah access lene ki jrurat nhi hai..

//console.log(JsUser["email"]);

//***imp concept**/

//console.log(JsUser["full name"]);// full name ko [] ka use krke access kar sakte hai yha dot ka use krke access nhi kar sakte

//console.log(JsUser[mySym]);

JsUser.email = "tyagi@facebook.com"// object ki value change karne ka trika.
//console.log(JsUser);

// object ki value ko freeze ya lock  krne k trika mtlab baad mai no change in object.

//Object.freeze(JsUser)
JsUser.email = "tyagiarpit@yahoo.com"
//console.log(JsUser);

//js user mai greeting add krni h fxn declare krke
JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){// objectk name ko reference kar rha hu,or aisa krne k liye hello js user ko string se backtick mai convert kiya.isko ***(string interpulation)*** bolte hai.
    
console.log(`Hello Js user,${this.name}`);


    //NOTE:jabhi bhi hme same object ko access krna hai toh hm this ka use krte hai,this ka baad dot lgane se jo bhi object k aandhar ki property hai yha mil jaati h.  ,or uske phle koi bhi variable likhna ho toh ${} ka use hoga.
}
console.log(JsUser.greeting());//Hello JS user

console.log(JsUser.greetingTwo());//Hello JS user,Arpit



