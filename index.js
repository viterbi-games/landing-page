$(function() {
    
    $('.mobile-nav-icon').on('click', function(e){
         $('.nav-body').toggleClass("visible");
 

         $('#open-btn').toggleClass('open');
         $('#close-btn').toggleClass('open');
        /*
         $('body').toggleClass('hides-overflow');
         $('html').toggleClass('hides-overflow');
         */
    });
    
 });