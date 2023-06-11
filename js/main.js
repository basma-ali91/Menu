$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            }
        }
    });

});


var typed = new Typed('#element', {
    strings: ['uper Offer'],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
    backDelay: 700,
    showCursor: false,
});


// using aos animation library
AOS.init({
    duration: 1500
});





let btnlogIn = document.getElementById("LogIn");
let fixedBox = document.getElementById("fixedBox");
let btnclose = document.getElementById("close");

let btnsignUp = document.getElementById("SignUp");
let fixedBox1 = document.getElementById("fixedBox1");
let btnclose1 = document.getElementById("close1");

btnlogIn.addEventListener("click",function(){
    fixedBox.classList.replace('d-none', 'd-flex');
    
});

btnclose.addEventListener("click" , function(){
    fixedBox.classList.replace('d-flex', 'd-none');
})

btnsignUp.addEventListener("click",function(){
    fixedBox1.classList.replace('d-none', 'd-flex');
    
});

btnclose1.addEventListener("click" , function(){
    fixedBox1.classList.replace('d-flex', 'd-none');
});

