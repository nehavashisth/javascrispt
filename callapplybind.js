let person1={
    fname:"neha",
    lname:"vashisth"
}

let print=function(age,a,b)
{
    console.log(`${this.fname} ${this.lname} ${age} ${a} ${b}`);
}

let person2={
    fname:'fgh',
    lname:"bhjjkkj"
}

print.call(person1,27,56)
print.call(person2,4,8)
print.apply(person1,[12,23,[4,5]])
print.apply(person2,[12,23])
let a=print.bind(person1,67,78)
console.log(a);
a()
