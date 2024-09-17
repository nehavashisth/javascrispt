//OBJECT LITERALS
// let obj={
//     fname:"Neha",
//     lname:"Vashisth",
//     fullname:function(){
//         console.log(`${this.fname} ${this.lname}`);
//     },
//     obj2:{
//     fname:"Karan",
//     lname:"Sharma",
//     fullname:function(){
//         console.log(`${this.fname} ${this.lname}`);
//     }
//     }
// }
//  console.log(obj.fname);
// console.log(obj.lname);
//obj.fullname();
// console.log(obj.obj2.fname);
// console.log(obj.obj2.lname);
 //obj.obj2.fullname();

// //ADDING A NEW KEY
// console.log(obj.age);
// obj.age=27
// console.log(obj.age);

// console.log(obj.obj2.age);
// obj.obj2.age=28
// console.log(obj.obj2.age);

// //Modifying the Key
// console.log(obj.obj2.fname);
// obj.obj2.fname="Encyclopedia"
// obj.obj2.fullname();

// //Deleting the Key
// obj.fullname()
// delete obj.fname
// obj.fullname()

//***********CONSTRUCTOR FUNCTION*****************
// function Details(f,l,a){
//     this.firstname=f
//     this.lastname=l
//     this.age=a
//     this.dd=function(){
//         console.log(`${this.firstname} ${this.lastname} ${this.age}`);
//        // console.log(`${f}`);
        
//     }
// }

// let person1=new Details("tim","tom",20)
// let person2=new Details("neha","vashisth",27)
//  console.log(person1);
// // //console.log(person2);
// person1.dd()

// // for (const k in person1) {
// //     console.log(person1[k]);
    
// // }

// let ar=[person1,person2]
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i].firstname);
    
// }

//DELETE THE KEY
// console.log(person1.age);
// delete person1.age
// console.log(person1.age);


//************CLASS CONSTRUCTOR***************

// class Details{
//     constructor(f,l,a){
//            this.firstname=f,
//            this.lastname=l,
//            this.age=a,
//            this.fun=function(){
//             console.log(`${this.firstname} ${this.lastname} ${this.age}`);
//            }
//     }
// }
// let d1=new Details("neha","vashisth",27)
// let d2=new Details("gc","gv",20)
// // console.log(d1);
// // console.log(d2);

// //let obj={obj1: {d1},obj2: {d2}}
// let obj={d1,d2}
// for (const k in obj) {
//     console.log(obj[k].firstname);
    
// }

//**********************OBJECT CONSTRUCTOR*******************************

let obj1=new Object()
console.log(obj1);
obj1.fname="neha"
obj1.lname="vashisth"
console.log(obj1);
obj1.fun=function(){
    console.log(`${this.fname} ${this.lname}`);
}
obj1.fun();

obj1.obj2={
    fname:"cvb",
    lname:"bvh",
    fun:function(){
        console.log(`${this.fname} ${this.lname}`);
    }
}
console.log(obj1.obj2);
console.log(obj1.obj2.fname);
obj1.obj2.fun()


// delete obj1.lname
// console.log(obj1);

// let obj2=new Object()
// console.log(obj2);
// obj2.age=27
// console.log(obj2);




