//STANDARD FUNCTION
//  function fn(a,b){
//     console.log("Standard Function");
//     return a+b
// }
// console.log(fn(10,20));

//  function fn(a){
//     console.log("Standard Function");
//     return a
// }
// console.log(fn([10,20]));


//FUNCTION EXPRESSION(RETURNING THE VALUE)
//let x=function(a,b){}
let x=function fn(a,b){
   // console.log(a+b);
    console.log("Function Expression");
    return a+b
}
console.log(x(10,20));


//IMMEDIATELY INVOKABLE FUNCTION
//  console.log(
//   (function(a,b){
//     return(a-b);    
// })(20,10));

//ARROW FUNCTION
// let x=(a,b)=>{
//     return(a*b);
// }
// console.log(x(10,2));

