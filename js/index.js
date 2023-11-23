"use strict";
function _selector(tag) {
    return document.querySelector(tag);
}
/*
========= BACKGROUND IMAGE CHANGE=========
*/

const images = [
    "header1.jpg",
    "header2.jpg",
    "header3.jpg",
    "header4.jpg",
    "header5.jpg",
    "header6.jpg"
];
let currentImage = 0;
function changeImage() {
    document.querySelector(
        ".header"
    ).style.backgroundImage = `url(images/${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
}
setInterval(changeImage, 3000);

/*
========= WORKING MOBILE NAVBAR =========
*/

_selector("#menu--bar").onclick = () => {
    var nav = _selector("#mobile-nav");
    var isopen = _selector("#mobile-nav").getAttribute("active");
    if (isopen === "false") {
        _selector("#menu--bar").innerHTML = '<i class="bi bi-x">';
        nav.style.display = "block";
        _selector("#mobile-nav").setAttribute("active", "true");
    } else {
         _selector("#menu--bar").innerHTML = '<i class="bi bi-list">';
        nav.style.display = "none";
        _selector("#mobile-nav").setAttribute("active", "false");
    }
};
