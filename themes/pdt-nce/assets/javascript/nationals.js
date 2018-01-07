$("div.founder-text").click(function() {


    if($(this).height() == 70){
        $(this).animate({
            height : $(this)[0].scrollHeight
        },800);
        
    }
    else{
        $(this).animate({
            height : 70
        },800);
    }
    $(this).find("img.show-more").toggleClass("rotate").animate(200);


});