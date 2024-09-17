var a='hello'
function fun()
{
    var a=10
    let b=20
    const c=30
}
{
   // var a=9
    const c=9
    fun()
}
fun()
console.log(a);
console.log(b);
console.log(c);


   



