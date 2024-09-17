//FORIN LOOP
// let a=["a","b",10]
// for (const i in a) {
//     console.log(i);
// }

let b={
    name:"neha",
    age:"27",
    department: function fun(){
      console.log("CS");
    }
}

for (const i in b) {
   console.log(b[i]);
}
b.department()
//FOROF LOOP
// for (const i of a) {
//     console.log(i);
// }









// let a=[10,"80",true]
// for(let i=0;i<=a.length-1;i++)
// {
//     console.log(a[i]);
//     console.log(typeof(a[i]));
// }

// let str="JavaScript"
// let s=""
// for(let i=str.length-1;i>=0;i--)
// {
// s=s+str[i]
// }
// console.log(s);
// let a=2
// let b="9"
// console.log(a*b);
// console.log(a+b);

//REVERSING THE SENTENCE
let str1="Welcome to Javascript";
let rev=str1.split(" ")
let r=""
for(let i=rev.length;i>=0;i--)
{
r=r+str1[i]
}
console.log(r);



for(let i=1;i<=5;i++)
	{
		for(let j=1;j<=5;j++)
		{
			if(j==1 || j==5 || i+j==6 || i==j || i==3)
			{
				//console.log("* ")
       // process.stdout.write("*")
       process.stdout.write("1 ")
			}
			else
			{
				process.stdout.write("  ");
			}
		}
		console.log();
	}


