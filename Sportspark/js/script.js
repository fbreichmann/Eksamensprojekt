
//Javascript til dropdown
function openDropdown() {

var x = document.getElementById("drop");
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function openDropdown2() {
  var x = document.getElementById("drop2");
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openOversigt() {
  var x = document.getElementById("pris");
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//Javascript til prisoversigt 

//event listener. 
var classname = document.getElementsByClassName("itm");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', show);
}

//variabler - arrays 
let antal = [];
antal[0] = "itm1"; 
antal[1] = "itm2"; 

let tekst = [];
tekst[0] = "børn samlet";
tekst[1] = "voksne samlet";

let output =[];
output[0] = "txt1";
output[1] = "txt2";

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

