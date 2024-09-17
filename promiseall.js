let p1=new Promise((resolve,reject)=>{
    console.log("trying to click on an element");
    setTimeout(() => {
        resolve("clicked")
        reject("error")
    }, 2000);
})

let p3=new Promise((resolve,reject)=>{
        console.log("passing value to the element");
        resolve("value passed")
        reject("value not passed")
    },2000);
    
let p2=new Promise((resolve,reject)=>{
            let a=80
            let b=50
           console.log("trying to compare the element");
           setTimeout(() => {
           if(a>b)
               resolve("a is greater")
           else
               reject("error b is greater")
           }, 2000);
       })
       
Promise.all([p1,p3,p2]).then((x)=>{console.log(x);}
).catch((e)=>
    {console.log(e);}
)     