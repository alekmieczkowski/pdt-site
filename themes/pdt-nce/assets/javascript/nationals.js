$("div.founder-text").click(function() {

    //if div is closed
    if($(this).height() == 70){
        $(this).velocity({
            height : $(this)[0].scrollHeight
        },400);

        //arrow
        $(this).find(".show-more").velocity({rotateX:"180deg"},200);
        
    }
    //if div is open
    else{
        $(this).animate({
            height : 70
        },400);

        //arrow
        $(this).find(".show-more").velocity("reverse",200);
    }
    //$(this).find("img.show-more").toggleClass("rotate").velocity(200);


});