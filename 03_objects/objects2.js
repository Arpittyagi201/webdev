//const tinderUser = new Object()// singleton object
//console.log(tinderUser);//{} empty object

const tinderUser = {}//non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Arjuna"
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{ id: '123abc', name: 'Arjuna', isLoggedIn: false }

//object k andhar object..
const regularUser = {
    email:"tyagi@gmail.com",
fullname:{
    userfullname:{
        firstname : "Arpit",
        lastname : "Tyagi"
    }
}
    
}
//optional chaining concept

//console.log(regularUser.fullname?.userfullname);// ? isliye use kiya hai agar fullname exist nhi krta hai toh khi baar jab API se responce aata hai toh ye syntax use kiya jaata hai.

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);


// object merge concept

const obj1 = { 1 : "a",2 : "b"}
const obj2 = { 3 : "c",4 : "d"}
 const obj4 = { 5 : "x",6 : "g"}
//const obj3 = { obj1,obj2}// 2 object ko merge krne ka trika.

//console.log(obj3);
// output is object k andhar object same in case of array.
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

 const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

 const obj8 = Object.assign({},obj1,obj2,obj4)
 //console.log(obj8);// empty object ko target maanlo ye piche walo ko source.
 
//NOTE: dono k output same hai hm object({}) bhi lga sakte hai ,ye object ek optional parameter hota hai,ye btata hai jitni bhi value hai combine hojaege .. 

//console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4':'d' }

//NOTE: assign or spread operator ka kaam hai object k aandhar object na aaye.

//SPREAD OPERATOR
const obj7 = {...obj1, ...obj2}
//console.log(obj7);

// jabhi database se value aati hai uska syntax.array of object aate hai .agar array k aandhar bhut saare object  hai toh usko kese print krte hai 

const users = [
    {
        id :1,
        email : "Adv@gmail.com"
    },
    {
        id :45,
        email : "Addfv@gmail.com"
    },
    {
        id :10,
        email : "Adfdv@gmail.com"
    },
]
users[1].email

//console.log(tinderUser);

//methods  ***VVIMP**

//console.log(Object.keys(tinderUser));

//[ 'id', 'name', 'isLoggedIn' ] datatype array hai dono output ka,saari keys ko liye or array mai rakh diya,database mai specially use hoga iska.. 

//console.log(Object.values(tinderUser));
//[ '123abc', 'Arjuna', false ]

//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Arjuna' ], [ 'isLoggedIn', false ] ]  array k aandhar array mila hai.har ek key value ko array mai bna diya jaata hai.

//console.log(tinderUser.hasOwnProperty(`name`));//true iska mtlab tinderuser mai name naam ki property hai ya nhi.


//Destructuring of object

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
    }
    //console.log(course.courseInstructor);// lekin ye syntax thoda code ko ganda bna deta hai.

    const{price} = course// kha se value extract krni h .course se or {}iske aandhar joh value extract krni h..
    console.log(price);// ye acha syntax hai.

    const{courseInstructor:ab} = course
    //console.log(ab);// apne according ab naam diya hai chota krne k liye naam.
    

    ///***APIS**/ 
       //backend se value aayi unko hm kese likhte hai ye API hai.phle ye xml k through aati thi lekin abhi json k through aati h.

       // api in form of object
    //    {
    //     "name":"Arpit",
    //     "coursename":"js hindi",
    //     "price" : "free",
    //    }
    // almost treat as json. json object hi hai lekin ish object ka naam nhi hai koi. 

    // API in form of array
    [
        {},
        {},
        {}
    ]
    