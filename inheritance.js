class parent{
    constructor(){
        console.log("constructor called");  
    }
    static a=10
    static b=20
    c=80
    static greet(){
        console.log("HELLO");
    }
}
let obj=new parent()
class child extends parent{
    static a=50
    static wish(){
        console.log(this.a);
        console.log(super.a);
        console.log(this.b);
        console.log("GOOD DAY");
        console.log(obj.c);  
    }
}
child.greet()
child.wish()