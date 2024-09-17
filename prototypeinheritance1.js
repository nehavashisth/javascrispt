let car1={
    name:"Audi",
    colour:"Red",
    YOL:2000
}
let car2=Object.create(car1)
console.log(car2);
car2.name="Benz"
console.log(car2.name)
console.log(car2.colour);
console.log(Object.getPrototypeOf(car2));

