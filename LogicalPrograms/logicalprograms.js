//************************************************************************ */
let a=[1,2,3,4]
let b=[1,2,3,4,5,6,7]
let sum=0
for(let i=0;i<b.length;i++){
    if(i<a.length&&i<b.length){
        sum=a[i]+b[i]
        console.log(sum)
    }
    else if(i>=a.length){
        console.log(b[i])
    }
}
//output
// 2
// 4
// 6
// 8
// 5
// 6
// 7

//********************************************************************* */
// let s='a2b4c1'
// let sum=0
// let res=s.match(/\d/g)
// console.log(res.reduce((e,a)=>e=+e+ +a))

//output 7

//*********************************************************************** */
// let str="[{()}]"
// let tr=[]

// for(let i=0;i<str.length;i++){
//     if((tr.length!==0)&&((str[i]==="]")&&(tr[tr.length-1]==="[")||(str[i]==="}")&&(tr[tr.length-1]==="{")||(str[i]===")")&&(tr[tr.length-1]==="(")))
//     {
//         tr.pop()
//     }
//     else{
//         tr.push(str[i])
//     }
// }
// if(tr.length===0){
//     console.log("balanced")
// }
// else{
//     console.log("not balanced")
// }

//output: balanced

//********************************************************** */
// let d=[0,1,2,3,4,5,6]
//  let[x,y,z,...rest]=d
// console.log([x,y,z])
// console.log(rest)
// let e=[[x,y,z],(rest)]
// console.log(e)

//**********************CONSECUTIVE*********************************** */
// let str='9912389567'
// let res=""
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i+1)-str.charAt(i)===1){
//         if(res.length===0){
//             res=res+str.charAt(i)+str.charAt(i+1)
//         }
//         else{
//             res=res+str.charAt(i+1)
//         }
//     }
//     else{
//         console.log(res)
//         res=""
//     }
// }

//***************************************************8 */
// let arr=[2,4,7]
// let res=[]
// for(let i=1;i<=10;i++){
//     if(!arr.includes(i)){
//         res.push(i)
//     }
// }
// console.log(res)

//output
// [
//     1, 3,  5, 6,
//     8, 9, 10
//   ]

//****************************************************************** */
// let num=121
// let newnum=num.toString()
// console.log(newnum.split("").reverse().join("")===newnum)

//output: true

//**************************************************************** */
// let str='malayalam'
// let r=""
// for(let i=0;i<str.length;i++){
//     let count=1
//     if(str[i]!=="a"||"e"||"i"||"o"||"u")
//     {
//         if(r.indexOf(str[i])===-1){
//             for(let j=i+1;j<str.length;j++){
//                 if(str[i]===str[j]){
//                     count++
                    
//                 }
//             }
//             console.log(`${str[i]} is: ${count}`)
//     r=r+str[i]
//         }
//     }
// }
// console.log(r)

//output
// m is: 2
// a is: 4
// l is: 2
// y is: 1
// maly
let str="malayalamieeeiiiuuooou"
let v="aeiou"
let c={}
for(let i=0;i<str.length;i++){
    if(v.includes(str[i])){
        if(c.hasOwnProperty(str[i])===false){
            c[str[i]]=1
        }
        else{
            c[str[i]]++
        }
    }
}
console.log(c)

//********************************************************** */
// let str='welcome to coding beauty'
// let res=str.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1,e.length)).join(" ")
// console.log(res)

//output Welcome To Coding Beauty

//*********************************************************************** */
// let arr=['javascript', 'selenium', 'api', 'cypress']
// let res=arr.map(e=>e.charAt(2))
// console.log(res)

//output: [ 'v', 'l', 'i', 'p' ]

//********************************************************************* */
// let str="good morning"
// let ar=str.split("")
// let res=ar.filter((e,i)=>{
//     if(e.includes("o")){
//         ar.splice(e,0)
//     }
//     else{
//         return ar
//     }
// })
// console.log(res.join(""))

//output: gd mrning

//******************************************************************** */
// let str='AxB1#*eZ8'
// console.log(str.match(/[A-Z]/g).toString())
// console.log(str.match(/[a-z]/g).toString())
// console.log(str.match(/[0-9]/g).toString())
// console.log(str.match(/\d/g).toString())
// console.log(str.match(/[^A-Za-z0-9]/g).toString())

//output: A,B,Z
// x,e
// 1,8
// 1,8
// #,*

//********************************************************************* */
// let ar=[]
// for(let i=1;i<=20;i++){
//     ar.push(i)
// }
// console.log(ar)

//output 
// [
//    1,  2,  3,  4,  5,  6,  7,
//    8,  9, 10, 11, 12, 13, 14,
//   15, 16, 17, 18, 19, 20
// ]

//******************************************************************** */
// let str = 'AxB5#*eZ45jhjhh40gcg2000';
// console.log(str.match(/\d+/g).reduce((e,a)=>+e + +a))


//output:2090

//******************************************************************* */
// let str='testyantra'.split("")
// let res=str.filter(e=>{
//     if(e.includes("a")||e.includes("e")||e.includes("i")||e.includes("o")||e.includes("u"))
//     {
//        str.splice(e,0) 
//     }
//     else{
//         return e
//     }
// })
// console.log(res.join(""))

//output: tstyntr

//*********************************************************************** */
// let s='hi hello welcome'
// console.log(s.split(" ").map(e=>e.split("").reverse().join("")).join(" "))

//output: ih olleh emoclew

//************************************************************ */
// let s='hi hello welcome'
// let rev=s.split("").reverse().join("").replace(/\s+/g,"")
// console.log(rev)
// let l=[1,5,7]
// let initial=0
// let res=""
// for(let i=0;i<l.length;i++){
//     res=res+rev.slice(initial,initial+l[i])+" "
//     initial=initial+l[i]
// }
// console.log(res)

//output: emoclewollehih
//em oclew ollehigh

//*********************************************************88 */

// function add(...arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     console.log(sum)
//     console.log(arr)
// }
// add(6,7)
// add(1,2,3,4)

 //output: 13
// [ 6, 7 ]
// 10
// [ 1, 2, 3, 4 ]

//************************************************** */
// let s='India'.toLowerCase()
// let count=0
// let res=s.split("").map(e=>{
//     if("aeiou".includes(e)){
//         count= count+1
//         return e
//     }
//     else{
//         return e
//     }
// })
// console.log(res)
// console.log(count)

//output: [ 'i', 'n', 'd', 'i', 'a' ]
//3

//********************************************************8 */
// let s='hi hello welcome to'
// let res=s.split(" ")
// console.log(res)
// for(let i=0;i<res.length;i++){
//     let temp=res[i]
//     res[i]=res[res.length-1]
//     res[res.length-1]=temp
// }
// console.log(res.join(" "))

//output:[ 'hi', 'hello', 'welcome', 'to' ]
//to hi hello welcome

//********************************************************8 */
// let a=[22,13,44,55,66,3]
// for(let i=0; i<a.length;i++){
//     count=0
//     for(let k=1;k<=a[i];k++)
// {
//     if(a[i]%k==0){
//         count++;
//     }

// }
// if(count==2){
//     console.log(a[i]);
// }
// } 

//output: 13,3

//************************************************************** */
// let str="javaseleniumjavascriptwebdriveriojava"
// let res=str.split("java")
// console.log(res.length-1)
// console.log(res)

//output: 3

//****************************************************************** */
// let str="dabDhgjBcvC"
// let res=""
// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]===str[j].toLowerCase()){
//             res=res+str[j]
//         }
//     }
// }
// console.log(res)
// let r=res.split("").reduce((e,a)=>{
//     return e.charCodeAt(0)>a.charCodeAt(0)?e:a
// })
// console.log(r)

//output: DBC
//D

//*************************************************** */
// let str="selenium"
// let res=""
// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i])!==str.lastIndexOf(str[i]))
//     {
//         res=res+str[i]
//         break;
//     }
// }
// console.log(res)

//output: e