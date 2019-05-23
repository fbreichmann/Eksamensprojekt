
//Javascript til dropdown
function openDropdown(i) {

var x = document.getElementById(i);
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//Javascript til prisoversigt 

//event listener. 
var classname = document.getElementsByClassName("input");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('change', show);
}
//variabler - arrays 
let antal = [];
antal[0] = "itm1"; 
antal[1] = "itm2"; 
antal[2] = "itm3"; 
antal[3] = "itm4";
antal[4] = "itm5";
antal[5] = "itm6";
antal[6] = "itm7";

let tekst = [];
tekst[0] = "x voksne";
tekst[1] = "x børn";
tekst[2] = "x luksus hytte(r)";
tekst[3] = "x basis hytte(r)";
tekst[4] = "x morgenmad";
tekst[5] = "x frokost";
tekst[6] = "x aftensmad";

let output =[];
output[0] = "output1";
output[1] = "output2";
output[2] = "output3";
output[3] = "output4";
output[4] = "output5";
output[5] = "output6";
output[6] = "output7";

//funktion son får teksten til at vise sig
function show(){
    for( var x = 0; x < classname.length ; x++) {
        if(document.getElementById(antal[x]).value > 0) {
    var a = document.getElementById(antal[x]).value + " " + tekst[x];
    }
    else{ 
    var a = "";
        }
        
        document.getElementById(output[x]).innerHTML = a;
    }    
}


//Javascript til billedskifte og baggrunds farve skift

var knap = document.getElementsByClassName("knap");
var imgskift = new Array(knap.length);

for ( var i = 0; i<knap.length;i++) {
imgskift[i]='plus';     
}

function changeImg(a,b,c){
    var image = document.getElementById(a);
    if (imgskift[b]=='plus'){
        image.src='../images/check.svg';
        document.getElementById(c).style.opacity=0.3;  
        imgskift[b]='check'; 
    }
    else{
        image.src='../images/plus.svg';
        document.getElementById(c).style.opacity=1;
        imgskift[b]='plus'; 
    }
}
   