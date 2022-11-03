function randomexp(){
    var myrandom=Math.round(Math.random()*2)//
//alert(myrandom);
 var link1="unkwn2.html"
    var link2="unkwn.html"
var link3="unkwn3.html"

    if (myrandom==0)
        window.open(link1)
    else if (myrandom==1)
        window.open(link2)
 else if (myrandom==2)
        window.open(link3)
    
} 


function answer(){
    var in1=parseInt(document.getElementById("inp1").value);
    var in2=parseInt(document.getElementById("inp2").value);
    var sumt=in1+in2;
    document.getElementById("sum").innerHTML=sumt;
    }