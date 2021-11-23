const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var HEADER_NAV          = $$('.header-center__nav');
var SECTIONS_NAV        = $$('.section-nav__btn');
var SECTIONS_NAV_TOP    = $('#__section-nav-top');
var SECTIONS_NAV_BOT    = $('#__section-nav-bot');
var SECTIONS            = $$('.section');
var CONTAINER           = $('#container');

var activedSection = 0;


//other
var DEVELOP_NAV = $$('.section-content__develop-nav');
DEVELOP_NAV.forEach(e => {
    e.onclick = function() {
        DEVELOP_NAV.forEach(el => {
            el.classList.remove('section-content__develop-nav--actived');
        });
        e.classList.add('section-content__develop-nav--actived');
    }
});


var MENU_BTN = $('#__menu-btn');
var MODAL_MENU = $('#modal-menu');
MENU_BTN.onclick = function() {

    if(!MODAL_MENU.classList.contains('menu--actived')) {
        MENU_BTN.classList.add('header-right-btn--actived');
        MODAL_MENU.classList.add('menu--actived');
        HEADER_NAV.forEach(e => {
            e.style.display = 'none';
        });
    }
    else{
        MENU_BTN.classList.remove('header-right-btn--actived');
        MODAL_MENU.classList.remove('menu--actived');
        HEADER_NAV.forEach(e => {
            e.style.display = 'block';
        });
    }
}

// section process
window.onresize = function() {
    activeSection(activedSection);
    activeNav(activedSection);
}

var levelScroll = false;
document.onmousedown = function(event) {
    var firstPositionY      = event.clientY;
    var firstActivedSection = activedSection;
    var scrollStatus = 0; // -1 = scroll up | 1 = scroll down | 0 = non scroll
    document.onmousemove = function(e){
        if(e.clientY < firstPositionY)
            scrollStatus = -1;
        else if(e.clientY > firstPositionY)
            scrollStatus = 1;
    }

    document.onmouseup = function () {
        if(scrollStatus == -1) activedSection++;
        else if(scrollStatus == 1) activedSection--;

        if(activedSection >= SECTIONS.length) activedSection = SECTIONS.length - 1;
        if(activedSection < 0) activedSection = 0;
        activeSection(activedSection);
        activeNav(activedSection);
    }
}

SECTIONS_NAV_TOP.onclick = function() {
    activedSection--;
    if(activedSection < 0) {
        activedSection = 0;
    }
    activeSection(activedSection);
    activeNav(activedSection);
}

SECTIONS_NAV_BOT.onclick = function() {
    activedSection++;
    if(activedSection >= SECTIONS.length) {
        activedSection = SECTIONS.length - 1;
    }
    activeSection(activedSection);
    activeNav(activedSection);
}

SECTIONS_NAV.forEach((element, index) => {
    element.onclick = function (){
        activedSection = index;
        activeNav(index);
        activeSection(index);
    }

    if(HEADER_NAV[index]) HEADER_NAV[index].onclick = function() {
        activedSection = index;
        activeNav(index);
        activeSection(index);
    };
});

//functions

function activeNav(number) {
    SECTIONS_NAV.forEach((e, i) => {
        e.classList.remove('section-nav__btn--actived');
        if(HEADER_NAV[i])
            HEADER_NAV[i].classList.remove('header-center__nav--actived');
    }); 
    SECTIONS_NAV[number].classList.add('section-nav__btn--actived');
    if(HEADER_NAV[number])
        HEADER_NAV[number].classList.add('header-center__nav--actived');
}

function activeSection(number) {
    SECTIONS.forEach(element => {
        element.classList.remove('section--actived');
        if(element.querySelector('.section-video'))
            element.querySelector('.section-video').pause();
    })
    SECTIONS[number].classList.add('section--actived');
    if(SECTIONS[number].querySelector('.section-video'))
        SECTIONS[number].querySelector('.section-video').play();

    CONTAINER.style.top = -number * window.innerHeight + 'px';
}
