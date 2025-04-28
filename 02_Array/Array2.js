const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//  console.log(marvel_heros);// output mai array k andhar array aagya.array js mai kisi bhi type ka entry data le lete hai.isne array ko bhi as a data le liya hai.

//  console.log(marvel_heros[3][2])

 const all_heros=marvel_heros.concat(dc_heros)
console.log( all_heros);


// Spread operator or concat dono ka kaam seme hai 2 ya 2 se jyada array ko merge krna.
const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
 //console.log(real_another_array);


// Interesting concept for interview

//console.log(Array.isArray("Hitesh"));//false. kya ye array hai hitesh o/p false

//console.log(Array.from("Hitesh"));// array mai convert using from

//console.log(Array.from({name: "Hitesh"}));// [] , return empty array 
// kyuki isko ye directly convert nhi kar pa rha hai , toh actually mai hme dena pdega ki keys ka array bnau ya phir value ka agar ye nhi bna paega toh hmesa empty array return krega..  

let score1 = 100;
let score2 = 200;
let score3 = 300;
// multiple arrays ya variable ko array mai convert krna k tarika.

console.log(Array.of(score1,score2,score3));//[100,200,300]