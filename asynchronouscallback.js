function f1(cb)
{
    setTimeout(() => {
        console.log("launch browser");
      //  cb()
    }, 3000);
    cb() 
}
function f2(){
    console.log("find an element");
}
f1(f2)
