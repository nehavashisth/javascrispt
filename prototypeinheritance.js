//PROTOTYPE INHERITANCE THROUGH OBJECTS

let obj1={
    name:"neha",
    surname:"vashisth",
    location:"bangalore",
    print:function(){
        console.log(`${this.name} ${this.surname} ${this.location}`);
    }
}
let obj2=Object.create(obj1)
console.log(obj2);
console.log(obj2.name);
console.log(obj2.location);
obj2.print()
obj2.location="rajasthan"
console.log(obj2.location);
console.log(obj2);
console.log(Object.getPrototypeOf(obj2));
obj2.print()



