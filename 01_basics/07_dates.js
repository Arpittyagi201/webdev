// Dates 

let myDate = new Date() // date k object
// console.log(myDate.toString());// sun jun 23 2024 07:35:47(time)

// console.log(myDate.toDateString());//sun june 23 2024
 
  //console.log(myDate.toLocaleString()); // 23/06/2024,7:37:09 am

//  console.log(myDate.toLocaleDateString());// 23/6/2024

//console.log(myDate.toLocaleTimeString());// 7:40:38 am

//  console.log(myDate.toTimeString());// 07:37:09


 //console.log(myDate.toJSON());//2024-06-23T02:17:15.677Z

 //console.log(myDate.toUTCString());//sun,23 jun 2024 02:14:36 GMT

 // console.log(myDate.toISOString());// 2024-06-23T02:15:35.540Z

 //console.log(typeof myDate);// object  ******INTERVIEW *******

 //let myCreatedDate = new Date()
 //console.log(myCreatedDate);// abhi ye isi instance k date aagyi mtlb aaj ki date aagyi

  //let myCreatedDate = new Date(2023,0,23)
 //console.log(myCreatedDate.toDateString());

 //let myCreatedDate = new Date(2023,0,23,5,3)
 //console.log(myCreatedDate.toLocaleString());//23/1/2023,5:03:00 am

 
//  let myCreatedDate = new Date("2023-01-14")
//  console.log(myCreatedDate.toLocaleString())

 
 
 let myCreatedDate = new Date("01-14-2023")
//  console.log(myCreatedDate.toLocaleString())


///********times*******8*/

let myTimeStamp =Date.now()
console.log(myTimeStamp);