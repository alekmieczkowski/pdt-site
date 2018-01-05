$("div.founder-text").click(function() {
    //note than the selectors used here will result in somewhat odd behaviour if there 
    //are multiple div.expand elements in the page :)

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
    $("img.show-more").toggleClass("rotate").animate(200);
   
    //$("img.show-more").animate({
    //    rotate : $("img.show-more").rotate(180)
    //},800);

});