const mySym = Symbol("Key1")
const JsUser = {
    name : "Arpit",
    [mySym]: "MyKey1",
   
    age : 20,
    email : "tyagi@123",
    location : "Dehradun",
}

console.log(typeof JsUser[mySym])
console.log(JsUser[mySym])
