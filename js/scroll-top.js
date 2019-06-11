
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#botao-scroll").fadeIn();
        }else{
            $("#botao-scroll").fadeOut();
        }
    });

    $(document).on("click", "#botao-scroll", function(){
        $("html , body").animate( {scrollTop: 0}, 800);
    })

});




