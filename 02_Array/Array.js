//array

// array declaration

const myArr = [0,1,2,3,4,5]
const myActor = ["shahrukh","ajay","trump"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// Array Methods

//myArr.push(6)
myArr.push(7)
myArr.pop()//remove last element
// console.log(myArr);

 myArr.unshift(9)// unshift mai hm argument dete hai shift mai koi paramerer nhi dete same as push pop

//  console.log(myArr);//unshift mai joh bhi value pass krte hai voh array ki starting mai add hojaati hai after operation
// Output (9,0,1,2,3,4,5)

myArr.shift()
//console.log(myArr);//(0,1,2,3,4,5)
//shift array ki 1st element ko remove krta hai.

//console.log(myArr.includes(9));//false

// includes means 9 array mai hai ya nhi
//console.log(myArr.indexOf(3));//3

 const newArr = myArr.join()
// console.log(myArr);//[0,1,2,3,4,5]
// console.log(newArr);//0,1,2,3,4,5

// console.log(typeof myArr);//object
// console.log(typeof newArr);//string join na array ko string mai convert kar diya hai 

// Slice ,Splice 

// A original array
 console.log("A",myArr);
 const myn1 = myArr.slice(1,3)// 1,2 include 3 include nhi hota isme.

// slice use 
 console.log(myn1);
 console.log("B",myArr);

// use splice
const myn2 = myArr.splice(1,3)//splice mai array hi change hogya splice wallah part alag hogya..
 console.log("C",myArr);
 console.log(myn2);
// output 
// A [ 0,1,2,3,4,5]
// [1,2]
// B [0,1,2,3,4,5]
// C [ 0,4,5]
// [1,2,3]

// some other array method

