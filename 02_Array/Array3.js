//******/ spread operator example*****
const arr=[2,3,"Arpit",5]
const arr2=["Arjun",3,5,"shivangi"]
const arr3=["karan","bhism",56,7,"drona"]
const arr4=["ajay",7,9,3,2]
const myarr=[...arr,...arr2,...arr3,...arr4]
// console.log(myarr);
// console.log(typeof myarr);//object

// ******concat method ******
const arr5=[2,3,"Arpit",5]
const arr6=["Arjun",3,[5,"shivangi"]]
const mynewarr=arr5.concat(arr6)
//console.log(mynewarr);

// *******push method******
arr5.push(arr6)
//console.log(arr5);// output mai array k aandhar array aagya ,ja mai array kisi bhi type ka entry data lete hai isne array ko bhi as a data le liya hai..

//console.log(typeof arr5);//object


//******Flat method******
const array=[1,2,3,4,[5,6,[7,3,5,2,[8,9,2,1]]]]
const myn1=array.flat(Infinity)// flat array ke andhar multiple array ko single array mai convert krta hai..lekin kitni depth tak krna ya btana hota hai ya phir infinity pass kradoh.
//console.log(myn1);




//**********Array,isArray method */

//console.log(Array.isArray([]));//true ye array hai.
//console.log(Array.isArray([1,3,4]));//true

const fruits =["Banana","Apple"]
let result = Array.isArray(fruits)
//console.log(result); //true

// the isArray() method returns true if an object is an array,otherwise return false.

//console.log(Array.isArray('[]'));//false
//console.log(Array.isArray(new Array(5)));//true

//console.log(Array.isArray([1]));//true
 //console.log(Array.isArray(new Array()));//true

//console.log(Array.isArray(new Array("a", "b", "c", "d")))//true
 //console.log(Array.isArray(new Array(3)));//true

//  console.log(Array.isArray(Array.prototype))//true

// console.log(Array.isArray({}));//false
// console.log(Array.isArray(undefined));//false
// console.log(Array.isArray(null));//false

//console.log(Array.isArray   **@@@("Array"));//false


//Array.from()*****
//console.log(Array.from('foo'))//array mai convert kardiya hai..

//****VVIMP FOR INTERVIEW ***

//console.log(Array.from({name:"Arpit"}));//[]
//reason=> empty array return hoga ,kyuki ye isko directly convert nhi kar pa rha hai hmko btana hoga ki ye sbhi keys se array bnana hai ya phir sbhi value se .

//***Array.of()***

//Array.of()=>return a new array from a set of element

//console.log(Array.of())//[]
//console.log(Array.of('foo', 2, 'bar', true))//[ 'foo', 2, 'bar', true ]