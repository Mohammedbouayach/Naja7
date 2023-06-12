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
let engli = document.getElementById("nt5").value;
let k1=mat*7 ;
let k2= phis*7 ;
let k3=sv*5 ;
let k4=phil*2;
let k5=engli*3;
document.getElementById("resu").innerHTML=(k1+k2+k3+k4+k5)/24;
}
function svt(){
  let ma = document.getElementById("n1").value;
let phs = document.getElementById("n2").value;
let svv = document.getElementById("n3").value;
let philo = document.getElementById("n4").value;
let englis = document.getElementById("n5").value;
let s1=ma*7 ;
let s2= phs*5 ;
let s3=svv*7 ;
let s4=philo*2;
let s5=englis*3;
document.getElementById("res").innerHTML=(s1+s2+s3+s4+s5)/24;
}
function reg(){
  let fs = document.getElementById("r1").value;
let ac = document.getElementById("r2").value;
let tj = document.getElementById("r3").value;
let ts = document.getElementById("r4").value;
let j1=fs*4 ;
let j2= ac*2 ;
let j3=tj*2 ;
let j4=ts*2;
document.getElementById("regio").innerHTML=(j1+j2+j3+j4)/10;
}