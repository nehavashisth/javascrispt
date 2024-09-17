//adding odd numbers
// let a=[1,2,3,5,4,8]
// let sum=0
// for(let i=0;i<a.length;i++){
//     if(a[i]%2!=0){
//         sum=sum+a[i]
//     }
// }
// console.log(sum)

//fitering numbers and other datatypes
// let arr=["hi","hello",1,6,8,null,true]
// let numbers=""
// let strings=""
// let booleans=""
// let object=""
// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i])=="number"){
//     numbers=numbers+arr[i]
//     }
//     else if(typeof(arr[i])=="string"){
//         strings=strings+arr[i]
//     }
//      else if(typeof(arr[i])=="boolean"){
//         booleans=booleans+arr[i]
//     }
//      else 
//      {
//         object=object+arr[i]
//     }
// }
// console.log(numbers)
// console.log(strings)
// console.log(booleans)
// console.log(object)
// console.log(typeof(1));

//duplicate numbers
// let arr=[1,2,2,1,4,6]
// let dup=[]
// for(let i=0;i<arr.length;i++){
//     if(arr.indexOf(arr[i])!=arr.lastIndexOf(arr[i])){
//         if(!dup.includes(arr[i]))
//         {
//         dup.push(arr[i])
//         }
//     }
// }
// console.log(dup)

//minimum and maximum no in array
// let arr=[1,0,2,7,6,8]
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

//delete duplicates
// let arr=[1,2,1,2,"hi","hi",7,8]
// let dup=[]
// function deldup(arr){
//    for (let i = 0; i < arr.length; i++) {
//     if(arr.indexOf(arr[i]==arr.lastIndexOf(arr[i]))){
//         if(!dup.includes(arr[i]))
//          dup.push(arr[i])
//     }
//    }
//    return dup
// }
// console.log(deldup(arr));



// let arr=[1,2,1,2,"hi","hi",7,8]
// let dup=[]

//    for (let i = 0; i < arr.length; i++) {
//     if(dup.indexOf(arr[i])===-1)
//     {
//          dup.push(arr[i])
//     }
//    }
   
// console.log(dup);

// let arr=[1,2,1,2,"hi","hi",7,8]
//    for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]==arr[j])
//         {
//             arr.splice(j,1)
//         }
//     }
//    }
// console.log(arr);



//occurrence of character
// let str="isahgyytbji"
// let r=""
// let res=function fun(s){
//     for(let i=0;i<s.length;i++){
//         let count=1
//         if(!r.includes(s[i])){
//             for(let j=i+1;j<s.length;j++){
//                 if(s[i]==s[j]){
//                     count++
//             }
//         }
//         console.log(`${s[i]}:${count}`)
//         r=r+s[i]
//     }
// }

// }
// res(str)
// let str="malayalamieeeiiiuuooou"
// let v=""
// let c={}
// for(let i=0;i<str.length;i++){
//     if(!v.includes(str[i])){
//         if(c.hasOwnProperty(str[i])===false){
//             c[str[i]]=1
//         }
//         else{
//             c[str[i]]++
//         }
//     }
// }
// console.log(c)


//reversing the string
// let str="hello good morning"
// console.log(str.split(" ").reverse().join(" "))

//reversing the string1
// let str="hello good morning"
// let a=str.split(" ")
// let b=a.map(e=>{
//     return e.split("").reverse().join("")
// })
// console.log(b.reverse().join(" "));

//reversing only odd place words
// let str="let me do my job"
// let a=str.split(" ")
// for(let i=0;i<a.length;i++){
//     if(i%2!=0){
//        a[i]=a[i].split("").reverse().join("")
//     }
// }
// console.log(a.join(" "))

//seperate alphates,number,special characters from the string
// let str="AxB1#*eZ8"
// let num="",lett="",sp=""
// console.log(str.match(/[0-9]/g))
// let ar=["h",1,2,3]
// console.log(ar.toString().match(/[0-9]/g))
// console.log(ar.toString().match(/[A-Za-z]/g))
// console.log(str.match(/\D/g)&&(str.match([^A])))


// let ar=[1,2,7,3,9]
// let p=ar[0]
// let maxnum=ar.reduce(function(){
//     for(let i=0;i<ar.length;i++){
//         if(ar[i]>p){
//             p=ar[i]
//         }
//     }
//     return p
// })
// console.log(maxnum)
// let minnum=ar.reduce(function(){
//     for(let i=0;i<ar.length;i++){
//         if(ar[i]<p){
//             p=ar[i]
//         }
//     }
//     return p
// })
// console.log(minnum)

//remove vowels
// let str="testyantra"
// let vowels=function(s){
//     let a=s.split("")
//     for(let i=0;i<a.length;i++){
//         if(a[i]=="a"||a[i]=="e"||a[i]=="o"||a[i]=="u")
//         {
//             console.log(a[i])
//         }
//     }
// }

// console.log(vowels(str))

// let ar=[1,2,7,3,9]
// let max=ar.reduce((m,e)=>{
// //return e>m?e:m
// if(e>m)
// return e
// else
// return m
// },ar[0])
// console.log(max)

// function f1(x){
// return function f2(y){
//     return function f3(z){
//         return x*y*z
//     }
// }
// }
// console.log(f1(1)(2)(3))

//*****************PRINT IN ASCENDING AND DESCENDING ORDER************************ */
// let ar=[1,2,7,3,9]
// let desc=ar.sort((a,b)=>{
//     return b-a
// })
// console.log(`descending order:${desc}`)
// console.log(`ascending order:${ar.sort()}`)

//***************************MAP(),REDUCE(),FILTER()********************************** */
// let ar=[1,2,7,4,3,9]
// let res=ar.filter(a=>{
//     if(a%2!=0){
//         return a
//     }
// })
// console.log(`FILTER:${res}`)
// let res1=ar.map(a=>{
//     return a*a
// })
// console.log(`MAP:${res1}`)
// let str="hello world"
// let res2=str.split("").reduce((a,c)=>c+a,"")
// console.log(`REDUCE:${res2}`)

//****************************************************************************/
// let ar=[23,46,100]
// let res=ar.filter(e=>{
//     if(e>40){
//         return e
//     }
// })
// console.log(res)

//****************************************************************************** */
// let ar=[1,4,6,7,9]
// //ar.length=0
// //console.log(ar)
// ar.splice(0,ar.length)
// console.log(ar)

//z****************************************************************************************
// let obj=[{"orderid":123,"orderTotal":23000},
//     {"orderid":123,"orderTotal":45000},
//     {"orderid":123,"orderTotal":81000},
// ]
// let total=obj.map(e=>e.orderTotal)
// console.log(total)

//**************************************************************************88 */
// let str="neha v@sh! e$gh"
// let res=str.replace(/[^a-zA-Z\s]/g,"")
// console.log(res)

//*************************************************************************8 */

// let str="I LIKE COMPUTER PROGRAMMING"
// //let res=str.split("").reverse().join("")
// let res=str.split(" ").reverse().join(" ").split("").reverse().join("")
// console.log(res)

//**************************************************************** */
// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log("Java")
//     }
//     else if(i%3===0){
//         console.log("JavaScript")
//     }
//     else if(i%2===0 && i%3===0){
//         console.log("WebDriverIO")
//     }
//     else{
//         console.log(i)
//     }
// }

//*************************************************** */
// let url="https://create.microsoft.com/en-us/template/attorney-resume-33449d14-b590-4c13-929a-4931b797f8f9"
// console.log(url.match(/[a-zA-Z]/g).join(""))


//********************************************************* */
// let url="https://create.microsoft.com/en-us/template/attorney-resume-33449d14-b590-4c13-929a-4931b797f8f9"
// //console.log(url.match(/[a-zA-Z]/g).join(""))
// let res=url.split("").filter(e=> /[a-zA-Z]/g.test(e))
// console.log(res.join(""))

//****************************************************** */
// let arr=[1,2,3,1,2,3,4,5]
// // let v=[]
// // for(let i=0;i<arr.length;i++){
// //     if(v.indexOf(arr[i])===-1){
// //             v.push(arr[i])
// //     }
// // }
// let v=[...new Set(arr)]
// console.log(v)

// //****************************************************8 */
// let arr = new Set([1,6,8])
// let allnum=new Set([...Array(10).keys()].map(e=>e=e+1))
// let res=[...allnum].filter(e=>!arr.has(e))
// console.log(res)

//************************************************** */
// let str="aabbbaccds"
// let res=""
// for(let i=0;i<str.length-1;i++)
// {
//     res=res+str.substring(i,i+2)+","
// }
// console.log(res)

// let str="aabbbaccds"
// function substring(str)
// {
// let res=new Set()
// for(let i=0;i<str.length-1;i++)
// {
//     res.add(str.substring(i,i+2))
// }
// return [...res]
// }
// console.log(substring(str))

//************************************************************88 */
let ar=[1,9,4,8,6,7]
for(let i=0;i<ar.length;i++){
    if(ar[i]>ar[i+1])
    {
        ar[i]=ar[i]+ar[i+1]
        ar[i+1]=ar[i]-ar[i+1]
        ar[i]=ar[i]-ar[i+1]
        i=-1
    }
}
console.log(ar)

//**************************************************************** */
// let num=[1,2,3,4,5,6]
// let[first,second,...rest]=num
// let spread=[first,second,...rest]
// console.log(first)
// console.log(second)
// console.log(rest)

//*********************************************************** 
// function counter(){
//     let count=0;
//     return {
//      increment:function (){
//          return ++count
//      },
     
//      decrement:function (){
//          return --count
//      }
    
//     }
// }
// console.log(counter().increment())
// console.log(counter().decrement())

//******************************************************** */
// let str="I am Scrum Certified".toLowerCase()
// let rev=str.split("").reverse().join("").replace(/\s+/g,"")
// console.log(rev)
// let l=[1,2,5,9]
// let res=""
// let initial=0
// for(let i=0;i<l.length;i++)
// {
//   res=res+rev.slice(initial,initial+l[i])+" "
//   initial=initial+l[i]
// }

//  console.log(res)

//*****************************************************8 */
// let arr = ['Geeks', 'gfg', 'GeeksforGeeks', 'abc']
// let substr="eks"
// let res=arr.filter(e=>e.includes(substr))
// console.log(res)

//*************************************************************8 */
// let months = [
//     'March', 'January', 'August', 'May', 
//     'December', 'November', 'April', 'June', 
//     'October', 'September', 'February', 'July'
// ]
// months.sort((a, b) => {
//     // Get the first character of both month names
//     const firstCharA = a[0].toUpperCase();
//     const firstCharB = b[0].toUpperCase();

//     // Compare the first characters
//     if (a[0] < b[0]) {
//         return -1; // a should come before b
//     }
//     if (a[0] > b[0]) {
//         return 1; // b should come before a
//     }
//     return 0; // a and b are equal
// });

// console.log(months);

//******************************************* */
// function printProgressiveSubstrings(input) {
//     for (let i = 1; i <= input.length; i++) {
//         console.log(input.slice(0, i));
//     }
// }

// Input string
// const input = 'selenium';

// // Call the function
// printProgressiveSubstrings(input);

//******************************************** */
// function countSubstringOccurrences(mainString, substring) {
//     let count = 0;
//     let index = 0;

//     while ((index = mainString.indexOf(substring, index)) !== -1) {
//         count++;
//         index += substring.length; // Move past the current match
//     }

//     return count;
// }

// // Example usage
// const mainString = 'javaseleniumjavascriptwebdriverio';
// const substring = 'java';

// const occurrences = countSubstringOccurrences(mainString, substring);
// console.log(`The substring '${substring}' appears ${occurrences} times.`);

// //********************************************************************** */
// console.log(typeof 123); // "number"
// console.log(typeof 'hello'); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof undefined); // "undefined"
// console.log(typeof { name: 'Alice' }); // "object"
// console.log(typeof [1, 2, 3]); // "object"
// console.log(typeof function() {}); // "function"
// console.log(typeof null); // "object"
// console.log(typeof BigInt(123)); // "bigint"


//****************************************************8 */
// let obj=[{"orderid":123,"orderTotal":23000},
//     {"orderid":123,"orderTotal":45000},
//     {"orderid":123,"orderTotal":81000},
// ]

// let res=obj.reduce((e,a)=>e+a.orderTotal,0)

// console.log(res)

//**********************************************88 */
let str="selenium"
let res=""
for(let i=0;i<str.length;i++){
    if(str[i]===str[i+1]){
        res=res+str[i]
    }
}
console.log(res)


// let a=[1,2,3,4,5]
// // let res=a.slice(a.length-2,a.length)
// // a.pop()
// // a.pop()
// // console.log(res+","+a)
// let b=a.slice(a.length-2,a.length)
// let res=a.filter(e=>a.pop())
// console.log(res+","+b)

// let ar=[1,2,1,2,1,3,4,5,1,2,4,5]
// let v=""
// for(let i=0;i<ar.length;i++){
//     if(v.indexOf(ar[i])===-1){
//         let count=1
//         for(let j=i+1;j<ar.length;j++){
//             if(ar[i]===ar[j]){
//                 count++
//             }
//         }
//         console.log(`${ar[i]} is coming: ${count} times`)
//         v=v+ar[i]
//     }
// }

//let str="i love javascript programming"
// let res=str.split(" ").reduce((e,a)=>{
//     if(e.length>a.length){
//         return e
//     }
//     else{
//         return a
//     }
// })
// console.log(res)
//console.log(str.replace(/[" "]/g,"_"))

// Input: [ {name: 'Alice', age: 25}, {name: 'Bob', age: 22}, {name: 'Charlie', age: 23} ]
// Output: [ {name: 'Bob', age: 22}, {name: 'Charlie', age: 23}, {name: 'Alice', age: 25} ]
let a=[ {name: 'Alice', age: 25}, {name: 'Bob', age: 22}, {name: 'Charlie', age: 23} ]
a.sort((a,b)=>a.age-b.age)
console.log(a)

//let str="i am scrum certified"
// let ar=str.split(" ").map(e=>e.length)
// console.log(ar)