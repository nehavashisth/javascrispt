let str="Hello World!"

//CHARAT
let value=str.charAt(4)
console.log(value);

//CHARCODEAT
let res1=str.charCodeAt(4)
console.log(res1);

//CODEPOINTAT
let res2=str.codePointAt(1)
console.log(res2);

//ENDSWITH
let res3=str.endsWith("World!")
console.log(res3);

//STARTSWITH
let res4=str.startsWith("hello")
console.log(res4);

//CONCAT
let res5=str.concat("Good day!")
console.log(res5);

//INCLUDES
let res6=str.includes("ello Wo")
console.log(res6);

//INDEXOF
let str1="Javasript is not Java"
let res7=str1.indexOf("va")
console.log(res7);//first occurence of 'v' in 'va'

//LASTINDEXOF
let str2="programming"
let res8=str2.lastIndexOf("m")
console.log(res8);

//LENGTH
let res9=str2.length
console.log(res9);

//LOCALCOMPARE
let res10="c".localeCompare("b")
console.log(res10);

//MATCH
let match=/is/
let res11=str1.match(match)
console.log(res11);

//MATCHALL
let str3="Javascript1Javascript2"
let regex=/Javascript\d/g
let res12=str3.matchAll(regex)
for (const i of res12) {
    console.log(i);
}

//PADEND
let str4="CODE"
let padstr=str4.padEnd(10,"*")
console.log(padstr);

//PADSTART
let padstr1 =str4.padStart(10,"*")
console.log(padstr1);

//REPEAT
let res13=str4.repeat(3)
console.log(res13);

//REPLACE
let res14=str.replace("l","p")
console.log(res14);

//REPLACEALL
let res15=str.replaceAll("l","p")
console.log(res15);

//SEARCH
let regexp=/[a-z]/
let index=str.search(regexp)
console.log(index);

//SLICE
let res16=str.slice(0,8)
console.log(res16);
    
//SPLIT
let res17=str.split(" ")
console.log(res17);

//SUBSTRING
let res18=str.substring(3,8)
console.log(res18);

//TOLOWERCASE
let res19=str.toLowerCase()
console.log(res19);

//TOUPPERCASE
let res20=str.toUpperCase()
console.log(res20);

//TRIM()
let str5="  javascript is fun   "
let res21=str5.trim()
console.log(res21);

//TRIMEND OR TRIMRIGHT
let res22=str5.trimEnd()
console.log(res22);

//TRIMSTART OR TRIMLEFT
let res23=str5.trimStart()
console.log(res23);












