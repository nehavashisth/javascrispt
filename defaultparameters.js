let x={
    a:"ghj",
    b:90
}
function details(name,place,fn,ar,obj,state="rajasthan")
{
    console.log(`${name} ${place}, ${state} [${ar}]`);
    fn("neha","vashisth")
    console.log(obj.b);
}

details("neha","bhiwadi",fullname,["nb",45,80.0,true],x)

function fullname(fname,lname)
{
console.log(`${fname} ${lname}`);
}


