// Navbar Scroll
$(window).scroll(function() {
   // console.log($(window).scrollTop());
   if ($(window).scrollTop() > 1) {
      $("nav").removeClass('bg-transparent').addClass('nav-color')
   }else if($(window).scrollTop() <= 0) {
      $('nav').removeClass('nav-color').addClass('bg-transparent')
   } 
});

// Active Navbar
$(document).ready(function() {
   const activePage = window.location.pathname;
   $('nav a').each(function() {
      var link = $(this);
   if (link.prop('href').includes(activePage)) {
         link.addClass('active');
      }
   });
});

// Scroll top button
$(document).ready(function() {

   $(window).scroll(function() {
      if($(this).scrollTop() > 40) {
         $('#toTop').fadeIn();
      } else {
         $('#toTop').fadeOut();
      }
   });

   $("#toTop").click(function() {
      $('html, body').animate(location.href="#home");
   })
});

// number animation
$(document).ready(function() {
   $(".num").counterUp({delay:10,time:1000});
});

// animation
$(document).ready(function() {
   let offset = {offset: "80%"}

   $(".fadeInDown").waypoint(function(){
      $(".fadeInDown").addClass("animate__animated animate__fadeInDown");
   },offset);
   
   $(".bounce").waypoint(function(){
      $(".bounce").addClass("animate__animated animate__bounce");
   },offset);

   $(".fadeIn").waypoint(function(){
      $(".fadeIn").addClass("animate__animated animate__fadeIn");
   },offset);

   $(".fadeIn2").waypoint(function(){
      $(".fadeIn2").addClass("animate__animated animate__fadeIn");
   },offset);

   $(".zoomIn").waypoint(function(){
      $(".zoomIn").addClass("animate__animated animate__zoomIn");
   },offset);

   $(".zoomIn2").waypoint(function(){
      $(".zoomIn2").addClass("animate__animated animate__zoomIn");
   },offset);

   $(".zoomIn3").waypoint(function(){
      $(".zoomIn3").addClass("animate__animated animate__zoomIn");
   },offset);

   $(".flipInX").waypoint(function(){
      $(".flipInX").addClass("animate__animated animate__flipInX");
   },offset);

   $(".flipInX2").waypoint(function(){
      $(".flipInX2").addClass("animate__animated animate__flipInX");
   },offset);

   $(".flipInX3").waypoint(function(){
      $(".flipInX3").addClass("animate__animated animate__flipInX");
   },offset);
});