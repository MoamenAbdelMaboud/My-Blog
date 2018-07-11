$(function () {
  
    
    'use strict';
    
    var winH = $('.slider').height(),
    
        UpperH = $('.upper-bar').innerHeight(),
       
        navH = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(winH - (UpperH + navH));
    
    //featured-work shuffle
    
    $('.featured-work ul li').on('click', function () {
     
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
        
            $('.shuffle-image .col-md').css('opacity', '1');
            
        } else {
            
            $('.shuffle-image .col-md').css('opacity', '.06');
            
            $($(this).data('class')).parent().css('opacity', '1');
        }
        
    });
    
    
    $('html').niceScroll({
        
        cursorcolor: '#08526d',
        
        
        
    });
    
});