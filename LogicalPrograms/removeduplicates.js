// let s="aabcd"
// let s1=""
// for (let i = 0; i < s.length; i++) {
//     let ch=s.charAt(i)
//     let counter=1
//     if(s1.indexOf(ch)==-1){
//         for(let j=i+1;j<s.length;j++)
// 			{
// 				let ch1=s.charAt(j);
// 				if(ch==ch1)
// 				{
// 					counter++;
// 				}
// 			}
// 			if(counter>=1)
// 			{
// 				console.log(ch);
// 			}
// 			s1=s1+ch;
//     }
// }


//JAVASCRIPT METHODS
let str="big black bug black big"
let duplicate=str=>{
    let ar=str.split(" ")
    let res=[]
    for (let i = 0; i < ar.length; i++) {
        if(ar.indexOf(ar[i])!==ar.lastIndexOf(ar[i])){
            if(!res.includes(ar[i])){
                res.push(ar[i])
            }
        }
    }
    return res.join(" ")
}
console.log(duplicate(str));


// let str="neha sharma"
// let res=str=>{
//     let ar=str.split(" ")
//     let output=[]
//     for (let i = 0; i < ar.length; i++) {
//         let l=ar[i].length
//         let f=ar[i].slice(l-2,l).split("").reverse().join("")
//         output.push(f," ",ar[i].slice(0,l-2))
//     }
//     return output.join(" ")
// }
// console.log(res(str));









