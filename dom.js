document.getElementById("ppp").innerHTML="HELLO JAVASCRIPT"
document.getElementById("bt1").onclick=click 
function click(){
    document.getElementById("bt1").innerHTML="CLICKED"
}
document.getElementById("bt2").onclick=date 
function date(){
    document.getElementById("bt2").innerHTML=Date()
}
let dobj=new Date()
document.getElementById("bt3").onclick=month 
function month(){
   // document.getElementById("bt3").innerHTML=dobj.getMonth()
   document.getElementById("text1").innerHTML=dobj.getMonth()
}