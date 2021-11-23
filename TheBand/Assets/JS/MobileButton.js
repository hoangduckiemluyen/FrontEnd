
// mobile menu button 

var buttonMobileMenu        = document.getElementById('mobile-menu-button');
var header                  = document.getElementById('header');
var headerHeight            = header.clientHeight;
var headerLogo              = document.getElementById('header-logo');
var headerRight             = document.getElementById('header-right-id');

// mobile menu button
buttonMobileMenu.onclick    = function () {
    var isClose             = header.clientHeight == headerHeight;
    
    if(isClose) {
        header.style.height = 'auto';
        headerLogo.style.display = 'none';
        headerRight.style = 'width: 100%';
    }
    else {
        header.style.height = null;
        headerLogo.style.display = null;
        headerRight.style.width = null;
    }
}