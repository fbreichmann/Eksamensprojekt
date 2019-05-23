let sliderlist = []; 
sliderlist[0] = "../images/basishytterne/basis1.jpg";
sliderlist[1] = "../images/basishytterne/basis2.jpg";
sliderlist[2] = "../images/basishytterne/basis3.jpg";
sliderlist[3] = "../images/basishytterne/basis4.jpg";

let counter = 0;
document.getElementById("sliderInfo").innerText = (counter + 1) + " af " + sliderlist.length;

document.getElementsById ("bntNext").addEventListener("click", function() {
    counter++;

if (counter >= sliderlist.length) {
    counter = 0;
}

    document.getElementsByClassName("hytimg").src = sliderlist [counter];
    document.getElementById("sliderInfo").innerText = (counter + 1) + " af " + sliderlist.length;
})

document.getElementsById("btnPrev").addEventListener("click", function(){
    counter--;
    
    if (counter <0){
        counter = sliderlist.length - 1;
    }
    
    document.getElementsByClassName("hytimg").src = sliderlist [counter];
    document.getElementById("sliderInfo").innerText = (counter + 1) + " af " + sliderlist.length;
})