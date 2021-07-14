function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
  
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides");
  var dots1 = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
}




var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var j;
  var slides2 = document.getElementsByClassName("blockSlide");
  var dots2 = document.getElementsByClassName("dots");
  if (m > slides2.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";  
  }
  for (j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(o) {
  showSlides3(slideIndex3 += o);
}

function currentSlide3(o) {
  showSlides3(slideIndex3 = o);
}

function showSlides3(o) {
  var k;
  var slides3 = document.getElementsByClassName("video");
  var dots3 = document.getElementsByClassName("dots");
  if (o > slides3.length) {slideIndex3 = 1}    
  if (o < 1) {slideIndex3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";  
  }
  for (k = 0; k < dots3.length; k++) {
    dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";
}