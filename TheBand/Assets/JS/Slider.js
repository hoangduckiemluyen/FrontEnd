// const

const SECTON_TO_NEXT_IMG    = 5;
const MILLISECOND_TO_NEXT_IMG = SECTON_TO_NEXT_IMG * 1000;

// variable
var sliderNavigationPrev    = document.getElementById ('slider-navigation-prev');
var sliderNavigationNext    = document.getElementById ('slider-navigation-next');
var mainSlider              = document.getElementById ('main-slider');
var sliderChildWidth        = document.getElementById ('slider').clientWidth;


// process
sliderNavigationPrev.onclick = prev;
sliderNavigationNext.onclick = next;

setTimeout(resetTimeOut, MILLISECOND_TO_NEXT_IMG);

// function
var point = 0;

function prev() {
    point += sliderChildWidth;
    if (point > 0)
        point = -(sliderChildWidth * 2);
    mainSlider.style = 'left: ' + point + 'px;';
}

function next() {
    point -= sliderChildWidth;
    if (point < -(sliderChildWidth * 2))
        point = 0;
    mainSlider.style = 'left: ' + point + 'px;';
}

function resetTimeOut() {
    next();
    setTimeout(resetTimeOut, MILLISECOND_TO_NEXT_IMG);
}