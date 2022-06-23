$(function() {
    
    $('.mobile-nav-icon').on('click', function(e){
         $('.nav-body').toggleClass("visible");
 

         $('#open-btn').toggleClass('visible');
         $('#close-btn').toggleClass('visible');
        /*
         $('body').toggleClass('hides-overflow');
         $('html').toggleClass('hides-overflow');
         */
    });
    
 });