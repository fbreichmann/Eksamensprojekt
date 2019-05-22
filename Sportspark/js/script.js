
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
var classname = document.getElementsByClassName("input");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', show);
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
tekst[0] = "børn";
tekst[1] = "voksne";
tekst[2] = "luksus hytter";
tekst[3] = "basis hytter";
tekst[4] = "morgenmad";
tekst[5] = "frokost";
tekst[6] = "aftensmad";

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


//Javascript til billedskifte

function changeImg(){
    document.getElementById("plus-click").src='../images/check.svg'; 
}
   
