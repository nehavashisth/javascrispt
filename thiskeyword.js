'use strict'
console.log(this);
function a(){
    console.log(this);
    
}
a()
let b=x=>{return this};
console.log(b);