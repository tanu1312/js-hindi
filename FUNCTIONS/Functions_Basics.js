function addTwoNUm (num1 ,num2){
    // console.log(num1+num2);
    // let  result = num1 + num2;
    // return result;
    return num1+ num2;

}
 const result =addTwoNUm(5,9);
// console.log("Result:", result);

// function addTwoNUm (num1 ,num2){
//         console.log(num1+num2); 
//     }
//     addTwoNUm(5,9);

function loginUserMsg(username){
    if(username ==undefined){// or (!username) or ( usename =="Tanu")
        console.log("Enter a UserNAme")
return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("tanu"));
console.log(loginUserMsg()); //output--> undefined;




