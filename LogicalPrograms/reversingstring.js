let str="mom"
let revstr=""
function reversestring(){
for(let i=str.length-1;i>=0;i--){
    revstr=revstr+str.charAt(i)
}
return revstr
}
console.log(reversestring());
if(str==revstr){
    console.log("yes"); 
}
else{
    console.log("no");  
}
let ar="javascript"
console.log(ar.split("").reverse().join(""));