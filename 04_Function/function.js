function college() {
    console.log("A");
    console.log("b");
    console.log("e");
    console.log("s");  
}
//college() 
 // output:
 //A
// b
// e
// s

// NOTE: college reference hai or college() ye execution hai..


// function addTwoNumber(number1,number2){
// console.log(number1+number2);
// }

// addTwoNumber()
// addTwoNumber(2,5)
// addTwoNumber(2,"4")//24
// addTwoNumber("5",3)//53
// addTwoNumber(2,null)//2
// addTwoNumber(2,"abc")//2abc

//NOTE: fxn ki definition mai joh input lete hai usko parameter bolte hai or fxn call k time joh value pass krte hai usko argument bolte hai..


//***Concept  */

// function addTwoNumber(number1,number2){
// console.log(number1+number2);
// }

//const result = addTwoNumber(3,5)//  value return 8 aani chahiye thi lekin undefined de rha hai.

//console.log("Result: ",result)  //undefined

//explanation: result k aandhar value undefined kese gyi. yhi interesting concept hai ki function se aapne   kya vapas bheja. console print krne ka matlab ye nhi hai ki woh function woh value return kar rha hai.return apne aap mai ek concept hai or console ek print krna hai.


function addTwoNumber(number1,number2){
    //let result = number1+number2
    //console.log("Shivi");  //lekin ye execute hoga kyuki return se phle hai.
    //return result
    //console.log("Arpit");  //ye arpit kbhi execute nhi hoga kyuki bydefault fxn ki definition ka ek rule hota hai ki return krke k baad fxn koi kaam nhi krega.

           //or
     return number1+number2       
    }
    addTwoNumber(3,5)
    const result = addTwoNumber(3,5)
    //console.log("Result: ",result);// abki baar result mai joh value hai wo koi actual value hai.



    function loginUserMessage(username){
        return `${username} just logger in` //string interpulation ka use krke return kiya hai.
    }
    // console.log(loginUserMessage("Shivi"))
    // output: Shivi just logger in

    // console.log(loginUserMessage())
    // output:undefined just logger in



    function loginUserMessage(username){
        //if(username ===undefined){
              //or
              if(!username){ // reason read note point.
            console.log("Please enter a username");
            return //return isliye kiya next step execute na ho

        }
        return `${username} just logger in` 
    }
    console.log(loginUserMessage("Arpit"))

    // output:
    //Please enter a username
    //undefined

    // Note: !(exclamatery symbol true ko false or false ko true mai convert krdeta hai) . js mai empty string or undefined ko false value maan liya jaata hai.



    
    // function loginUserMessage(username = "Shivangi"){
    //     //if(username ===undefined){
    //           //or
    //           if(!username){ // reason read note point.
    //         console.log("Please enter a username");
    //         return //return isliye kiya next step execute na ho

    //     }
    //     return `${username} just logger in` 
    // }
    //console.log(loginUserMessage())//Shivangi just logger in
    //console.log(loginUserMessage("Bhism"))//Bhism just logger in ( value overwrite hogyi shivange se bhism )