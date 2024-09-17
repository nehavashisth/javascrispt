// class encap{
//     #pin=1234
//     #pwd=null
//     // get getpin(){return this.#pin}
//     // set setpin(newpin){
//     //     this.#pin=newpin
//     // }
//      get getpin(){return this.#pwd}
//     set setpin(newpin){
//         this.#pwd=newpin
//     }
// }
// let obj=new encap()
// // console.log(obj.getpin);
// // obj.setpin=4567
// // console.log(obj.getpin);
// obj.setpin=9876
// console.log(obj.getpin);

class encap{
    #cvvdetails=123
    #cname="abc"
    get getcvv(){return this.#cvvdetails}
    set setcvv(newcvv){this.#cvvdetails=newcvv}
    get getcname(){return this.#cname}
    set setcname(newcname){this.#cname=newcname}
}
let obj=new encap()
console.log(obj.getcvv);





