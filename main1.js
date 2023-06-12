function note(){
let output = document.getElementById("note1").value;
let out = document.getElementById("note2").value;
let ou = document.getElementById("note3").value;
let n1=output*0.25 ;
let n2= out*0.25 ;
let n3=ou*0.5 ;
/*document.getElementById("result").innerHTML=n1+n2+n3;*/

 if(n1+n2+n3<10)
{document.getElementById("result").innerHTML= n1+n2+n3 +"  "+
 "failed"

}
if (n1+n2+n3>=10) {document.getElementById("result").innerHTML=n1+n2+n3 +" "+ "successful "
}
if(n1+n2+n3>=12)
{document.getElementById("result").innerHTML= n1+n2+n3 +"  "+
 "bein"
}
if(n1+n2+n3>=14)
{document.getElementById("result").innerHTML= n1+n2+n3 +"  "+
 "très bien"
}
if(n1+n2+n3>=16)
{document.getElementById("result").innerHTML= n1+n2+n3 +"  "+
 "excellent"
}
}
function ntn(){
  let mat = document.getElementById("nt1").value;
let phis = document.getElementById("nt2").value;
let sv = document.getElementById("nt3").value;
let phil = document.getElementById("nt4").value;
let k1=mat*3 ;
let k2= phis*3 ;
let k3=sv*4 ;
let k4=phil*4;
document.getElementById("resu").innerHTML=(k1+k2+k3+k4)/14;
}
function reg(){
  let fs = document.getElementById("r1").value;
let ac = document.getElementById("r2").value;
let tj = document.getElementById("r3").value;
let j1=fs*1 ;
let j2= ac*4 ;
let j3=tj*2 ;
document.getElementById("regio").innerHTML=(j1+j2+j3)/7;
}