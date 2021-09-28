$(document).ready(function(){

    $('#icon').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-menu').toggleClass('rigth');
    });

    $(window).on('load scroll',function(){

        $('#icon').removeClass('fa-times');
        $('.nav-menu').removeClass('rigth');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.nav-menu ul li a').removeClass('active');
                $('.nav-menu').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });
});