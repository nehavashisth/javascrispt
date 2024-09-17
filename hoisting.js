//VARIABLE HOISTING
console.log(a);
var a=10
console.log(a);


//FUNCTION HOISTING
name()
function name()
{
    console.log(a);
    var a=10
    console.log(a);
}
console.log(x);
{
    console.log(x);
    var x=20
    console.log(x);
}

print()

// function print() {
//   console.log(name)
//   var name = "Dillion"
// }