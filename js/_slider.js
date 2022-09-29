$(function(){


    $('.slider-wrapper').slick({
        slide: 'div',
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000

    });
    
        //프로그레스바
        let time = 0;
        let timeSet;
        let duration = 6;
        
        
        $(".slider-wrapper").on('afterChange',function(){
            time = 0;
            duration = 6;
            $(".slide_progress").addClass("pro-set");
            $("pro-set").css({
                'animation-duration':'6s',
            })
            timeSet = setInterval(function(){
                duration--;
            },1500)
        });
        $(".slider-wrapper").on('beforeChange',function(){
            $(".slide_progress").removeClass('pro-set');
            clearInterval(timeSet); 
        });
        duration = duration + time; 
        console.log(duration, time)
        time = 0;
})
    