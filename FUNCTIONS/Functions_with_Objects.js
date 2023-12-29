// function calcCartPrice(...num1){
//     return num1
// }

// console.log(calcCartPrice(200,300,400))

function calcCartPrice(val1, val2, ...num1){
   
            return num1
        }
        
        console.log(calcCartPrice(200,300,400,1000))
        
        const user ={
username : "Tanu",
Age : 26
        }
        function handleObject(anyobject){
            console.log(`Username is ${anyobject.username} and Age is ${26}`)
        }
        // handleObject(user)
        //Direct Object
        handleObject({
            username :"Tanu",
            Age : 26
        });


    



        function returnForthValue(getArray){
            return getArray[3]
        }

        // console.log(returnForthValue(myArray));
        console.log(returnForthValue([250 , 4000, 400, 900]));