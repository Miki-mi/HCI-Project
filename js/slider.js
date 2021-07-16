$(document).ready(function(){
    $('#right').on('click', function(){
        
            var currentImg = $('.active');
            var nextImg = currentImg.next();

            if(nextImg.length){
                currentImg.animate({opacity: 0.0}, 300, function() {
                    currentImg.removeClass('active').css('z-index', -1);
                    nextImg.addClass('active').css('z-index', 1);
                    nextImg.css({opacity: 1});
                });
            }
            else{
                nextImg = $('#first')
                nextImg.animate({opacity: 0.0}, 300, function() {
                
                    currentImg.removeClass('active').css('z-index', -1);
                    nextImg.addClass('active').css('z-index', 1);
                    nextImg.css({opacity: 1});
                });
            }
            
    });
});


$(document).ready(function(){
    $('#left').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.animate({opacity: 0.0}, 300, function() {
                currentImg.removeClass('active').css('z-index', -1);
                prevImg.addClass('active').css('z-index', 1);
                prevImg.css({opacity: 1});
            });
        }

        else{
            prevImg = $('#last')
            prevImg.animate({opacity: 0.0}, 300, function(){
                currentImg.removeClass('active').css('z-index', -1);
                prevImg.addClass('active').css('z-index', 1);
                prevImg.css({opacity: 1});
            });
        }
    });
});
