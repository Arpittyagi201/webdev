const obj1 = { 1 : "a",2 : "b"}
const obj2 = { 3 : "c",4 : "d"}

//const obj3 = { obj1,obj2}// 2 object ko merge krne ka trika.

//console.log(obj3);

// output is object k andhar object same in case of array.
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)


const target = { a:1,b:2};
const source = { b:4,c:5};
const returnTarget = Object.assign({},target,source);
console.log(returnTarget);
console.log(target);
console.log(source)
console.log(returnTarget=== target)
// { a: 1, b: 4, c: 5 }
// { a: 1, b: 2 }
// { b: 4, c: 5 }
// false