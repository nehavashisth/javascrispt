// let sum1=""
// function sum(str){
// for (let index = 0; index < str.length; index++) {
//  //   if(/[a-zA-Z]/.test(str[index])){
//     if((/[^0-9]/).test(str[index])){    
//       sum1=sum1+str[index]
//     } 
// }
// return sum1
// }
// console.log(sum("12asdaz34fSDg"));

// console.log(10 - "5");
// console.log("5"-10);

//filtering the alphabets
// let alpha=(str)=>{
// let res=str.test(/[A-Z]/)
// return res
// }
// console.log(alpha("AbAc12S34"));

// let arr = ["Agra", "Delhi", "Agra","Mathura", "Mathura", "Gurugram"];

// function removeDuplicates(arr) {
// return arr. filter((item,index) => arr.indexOf(item)===index);
// }

// console.log(removeDuplicates(arr))

//async function foo() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log("C");
// }

// console.log("D");
// foo();
// console.log("E");
// obj={
//   a:"a",
//   b:9
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

//******************************************************************************** */
// function reverseEachWordInPlace(str) {
//   // Split the string into words based on spaces
//   const words = str.split(' ');

//   // Reverse each word
//   const reversedWords = words.map(word => {
//     // Reverse the individual word
//     return word.split('').reverse().join('');
//   });

//   // Join the reversed words back into a single string with spaces
//   return reversedWords.join(' ');
// }

// Example usage
// const input = "Hello World";
// const output = reverseEachWordInPlace(input);

// console.log(output); // Output: "olleH dlroW"

// let str="i like programming"
// function rev(s){
//   let w=str.split(" ")
//   let op=w.map(e=>{
//     return e.split("").reverse().join("")
//   })
//   return op.join(" ")
// }
// console.log(rev(str));

let a=0
let b=false
console.log(a==b);
console.log(a===b)


let str="neha vashisth"
function rev(s){
  let p=s.split(" ")
 
    let o=p.map(e=>{
      return e.split("").reverse().join("")
    })
  return o
}
console.log(rev(str).join(" "));

// let str="aabbbccddd"
// let substr=[];
// function substringoflength2(a){
//   for (let i = 0; i < a.length-1; i++) {
//    let b=str.substring(i,i+2)
//    substr.push(b)
//   }
// }
// substringoflength2(str)
// console.log(substr);











