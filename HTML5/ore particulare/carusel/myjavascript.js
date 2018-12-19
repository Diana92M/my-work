
var currentSlide = 0;
function showslide(n) {
    if (n<0){
        currentSlide=n=2;
    }
    if (n>2) {
        currentSlide=n=0;
    }
var poze = document.getElementById('poze')
var slide = poze.firstElementChild.children;
console.log (slide)
for (var i = 0; i<3; i++) {
    slide[i].style.display = 'none';
}
slide[n].style.display = 'block';
}

showslide(currentSlide);



setInterval('showslide(++currentSlide)', 3000) 