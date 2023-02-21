 window.addEventListener('load', function () {
   // HEADER SECTION

   // STICKY HEADER
   // WHEN THE USER SCROLLS DOWN 20px SHOW THE HEADER THROUGHOUT PAGE
     window.addEventListener("scroll", function () {
     var header = document.querySelector ("header");
     header.classList.toggle("sticky", window.scrollY > 120)
     });
   // END STICKY HEADER
   // NAV MENU ACTIVE
   var li = document.querySelectorAll(".links");
   var sec = document.querySelectorAll(".sections");
   function activeMenu() {
      let len = sec.length;
      while(--len && window.scrollY + 100 < sec[len].offsetTop) {};
      li.forEach(itx => itx.classList.remove("active"));
      li[len].classList.add("active");
   };
   activeMenu();
   window.addEventListener("scroll", activeMenu);
   
   //navMenu.addEventListener();
   // END NAV MENU ACTIVE

   // SIDEBAR ACTIVE
   var side = document.querySelectorAll(".logo");
   var secTwo = document.querySelectorAll (".sections");
   function activeSide() {
      let width = secTwo.length;
      while(--width && window.scrollY + 100 < secTwo[width].offsetTop){};
      side.forEach(itz => itz.classList.remove("active"));
      side[width].classList.add("active");
   };
   activeSide();
   window.addEventListener('scroll', activeSide);
   //sideMenu.addEventListener();
   // END SIDEBAR ACTIVE

   // BODY SECTION 

    // PAGE SCROLLING DOWN TO TOP BUTTON

 // GET THE BUTTON
 var mybutton = document.getElementById("myBtn")

 // WHEN THE USER SROLLS DOWN 100px FROM THE TOP OF THE DOCUMENT SHOW THE BUTTON
 window.onscroll = function () {
  scrollFunction ()
 };
 function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block"
  }
  else {
    mybutton.style.display = "none"
  }
 }
 // WHEN THE USER CLICKS ON THE BUTTON, CONTACT US
  function topFuntion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  topFuntion ();

 // END PAGE SCROLLING DOWN CAll BUTTON

  // REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i=0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
     }
   }
   // END REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN

   // END BODY SECTION 

});