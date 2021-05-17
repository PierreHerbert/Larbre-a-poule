var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Changer les images 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// fin slide 


//  Zoom IMAGES


// zoom 
function zoom(i){
    document.getElementById(i).style.display = "block";
   
    

}
// fin zoom 

// dezoom 
function zoomOut(j){
    document.getElementById(j).style.display = "none";
  
}
// fin dezoom 

// fin Zoom images 

// Menu Burger


// afficher le menu burger  
function burger(k,l,m){

    document.getElementById(k).style.display = "flex";
    document.getElementById(l).style.color = "white";
 document.getElementById(l).style.display = "flex";
    document.getElementById(m).style.display = "flex";
}
// fin afficher menu burger 

// fermer le menu burger 
function burgerNone(l,k,m){
    document.getElementById(l).style.display = "none";
      document.getElementById(k).style.display = "none";
    document.getElementById(m).style.display = "flex";

}
// fin fermer le menu burger 

// Fin menu burger