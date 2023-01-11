var sun = document.getElementById("sun");
var text = document.getElementById ("text");
var btn = document.getElementById("btn");
var section  = document.querySelector(".section")
window.addEventListener("scroll", function () {
   var value = window.scrollY;
   sun.style.top = 150 + value * 5.05 + "px"; 
   text.style.bottom = 100 + value * 5 + "px";
   btn.style.top = value * -1.5 + "px";
   if (document.scrollY < 20) {
      section.style.background = "linear-gradient(grey,white)"
   }
});