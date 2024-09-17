//TOSTRING
let ar=["abc","pqr",10,20]
let res1=ar.toString()
console.log(res1);

//JOIN
let res2=ar.join("|")
console.log(res2);

//CONCAT
let ar1=[50,80,"efg","hij"]
let res3=ar.concat(ar1)
console.log(res3);

//FLAT
let ar2=[3,[8,9,7],[9,4],2,1]
let res4=ar2.flat(Infinity)
//let res4=ar2.flat(0)
console.log(res4);

//PUSH
ar.push(true)
console.log(ar);

//POP
ar.pop()
console.log(ar);

//UNSHIFT
ar.unshift(60,70,true)
console.log(ar);

//SHIFT
ar.shift()
console.log(ar);

//SPLICE
ar.splice(2,2,false,"string","uvw")
console.log(ar);

//SLICE
let res5=ar.slice(0,3)
console.log(res5);

//INDEXOF
let res6=ar.indexOf("uvw")
console.log(res6);

//REDUCE
let ar3=["javascript","is","fun","ok"]
function joinarr1(i,v){
return v+i
}
let res7=ar3.reduce(joinarr1)
console.log(res7);

//REDUCETRIGHT
let ar4=[10,40,10]
function joinarr(i,v){
return i-v
}
let res8=ar4.reduceRight(joinarr)
console.log(res8);

//LASTINDEXOF
let ar5=[50,80,90,50,10]
let res9=ar5.lastIndexOf(50)
console.log(res9);

//INCLUDES
let check=ar.includes(true)
console.log(check);

//MAP
let ar6=[4,9,16,25]
let res10=ar6.map(x=>{return Math.sqrt(x)})
console.log(res10);

//FLATMAP
let ar7=["HELLO JAVASCRIPT","IS","FUN !"]
let res11=ar7.flatMap(x=>x.split(" "))
console.log(res11);

//REVERSE
console.log(ar);

ar.reverse()
console.log(ar);

//FOREACH
function square(element){
    console.log(element*element);
}
ar6.forEach(square)

//FILTER
let ar8=[2,3,5,6]
function evennumber(x){
if(x%2==0){
   // console.log(x);
   return x
}
}
let b=ar8.filter(evennumber)
console.log(b);

//SORT
ar.sort()
console.log(ar);

//FIND
let oddnum=ar8.find(x=>{return x%2!=0}) //returns first element satisfying
console.log(oddnum);




















