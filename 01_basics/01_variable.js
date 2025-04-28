const accountId = 135466
let accountEmail = "Arpit@1224.com"
var accountPassword = "1324"
accountCity = "Roorkee"

// accountId = 2354  not allowed kyuki const keyword use kiya hai node js/

accountEmail = "abc21@sd.com"
accountPassword = "4577"
accountCity = " haridwar"

let accountState;

//console.log(accountCity); 

/*
prefer not to use var keyword. 
because of issue in block scope and functional scope.  

only let and const keyword are use.
*/

//console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
let a = 5;
let b =a++;
console.log(a+b);
