function f1(a){
    console.log("bye");
    console.log(a);
    
}
function f2(fn,a,b)
{
    console.log("hi");
    console.log(a-b);
    fn(3)
}
function f3(fn)
{
    console.log("welcome");
    fn(f1,10,5)
}
f3(f2)

/* ********************************************************** */
function add(a,b,cb3)
{
    console.log(a+b);
    console.log("perform subtraction");
    cb3(a,b)
}
function sub(x,y)
{
    console.log(x-y);
}
function perform(cb1,cb2,n1,n2)
{
    console.log("perform addition");
    cb1(n1,n2,cb2)
}
perform(add,sub,40,30)


