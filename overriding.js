class result{
    c=10
    announce(){
        let marks=20
        console.log(`u have scored ${marks}`);
        console.log(`value of c: ${this.c}`);
    }
}
let obj1=new result()
obj1.announce()
class result1 extends result{
    c=20
    announce(){
        let marks=50
        console.log(`marks updated to ${marks}`);
        console.log(`value of c: ${this.c}`);
        super.announce()
    }
}

let obj=new result1()
obj.announce()
console.log(obj.c);
