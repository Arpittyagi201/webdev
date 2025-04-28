// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //true 
console.log("02">1);//true
console.log(null>0) // (false)  is tareh kai conversion ko avoid karna chahiye
console.log(null==0) //(false)
console.log(null<=0) //true
//  // java script mai comparison operator or equality operator ka kaam karne ka tarika thoda different hai..

 console.log(null>=0); //  (true)isme js na null ko convert kardiya 0 mai.


 console.log(undefined==0);//false
 console.log(undefined>0); // avoid karna hai aise conversion ko
 console.log(undefined<0);//false
console.log(undefined<=0);//false
 console.log(undefined>=0); // sbka output false hai..


// strict check or === check
 //(triple equal value ke saath uska data type bhi check krta hai)

console.log("2"==2) 

// true hai kyuki double equal mai ye string number mai convert ho jaata hai 

console.log("2"===2) 

// false hai kyuki ye abhi data type compare karega joh alag alag hai..


