"use strict"

let menuBurger = document.querySelector(".menu__burger");
let menuBody = document.querySelector(".menu__body");
let body = document.querySelector("body");

menuBurger.addEventListener("click", function(e){
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    body.classList.toggle('_lock');
})