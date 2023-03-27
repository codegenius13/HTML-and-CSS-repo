"use strict"

function carousel() {
    let carouselSlider = document.querySelector(".carousel_slider");
    let list = document.querySelector(".carousel_list");
    let Item = document.querySelectorAll(".carousel_item");
    let list2;

    const speed = 1;
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }
    clone();
    function moveFirst() {
        x -= speed;
        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        }
        else {
            x = width;
        }
    };
    function moveSecond() {
        x2 -= speed;
        if (list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        }
        else {
            x2 = width;
        }
    }
    function hover() {
        clearInterval(a);
        clearInterval(b);
    }
    function unhover() {
        let a = setInterval(moveFirst, 30);
        let b = setInterval(moveSecond, 30); 
    }
    let a = setInterval(moveFirst, 30);
    let b = setInterval(moveSecond, 30);
  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
};
carousel();