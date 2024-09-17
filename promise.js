let p1=new Promise((resolve,reject)=>{

    console.log("trying to click on an element");
    setTimeout(() => {
        resolve("clicked")
        reject("error")
    }, 2000);
})

p1.then((c)=>{console.log(c);}).catch((e)=>{console.log(e);
}).then(()=>{
    let p3=new Promise((resolve,reject)=>{
        console.log("passing value to the element");
        resolve("value passed")
        reject("value not passed")
    },2000);
    
    p3.then((p)=>console.log(p)).catch((e)=>console.log(e)).then(()=>{
        let p2=new Promise((resolve,reject)=>{
            let a=40
            let b=50
           console.log("trying to compare the element");
           setTimeout(() => {
           if(a>b)
               resolve("a is greater")
           else
               reject("error b is greater")
           }, 2000);
       })
       
       p2.then((c)=>{console.log(c);}).catch((e)=>{console.log(e);
       })

    })
})





