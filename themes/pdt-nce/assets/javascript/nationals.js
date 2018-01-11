$("div.founder-text").click(function() {


    if($(this).height() == 70){
        $(this).animate({
            height : $(this)[0].scrollHeight
        },400);
        
    }
    else{
        $(this).animate({
            height : 70
        },400);
    }
    $(this).find("img.show-more").toggleClass("rotate").animate(200);


});