
/*Pillars*/
$( document ).ready(function() {
    $("#friendship").fadeOut(1);
    $("#rectitude").fadeOut(1);
    toggle_pillar(".pillar-learning");
});


var pillar_id= [".pillar-friendship",".pillar-rectitude", ".pillar-learning"];
function toggle_pillar(pillar_name){
    var selected = pillar_name.replace('.','')+"-selected";
    //if button is not already selected

    if (!$(pillar_name).hasClass(selected)){

        //remove selection from others
        for (index = 0; index < pillar_id.length; ++index) {
            var pillar_arr = pillar_id[index].replace('.','')+"-selected";
                if ($(pillar_id[index]).hasClass(pillar_arr)){
                    $(pillar_id[index]).removeClass(pillar_arr);
        }
        //make pillar selected
        $(pillar_name).addClass(selected);

    };
    
    }
}
function toggle_text(pillar_name){

    //controls
    var delay = 500;
    //get text tag
    var tag = pillar_name.replace('pillar-','');
    switch(tag){
        case '#friendship':
        $("#learning").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#friendship").delay(delay).fadeIn(700);
        break;
        case '#learning':
        $("#friendship").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#learning").delay(delay).fadeIn(700);
        break;
        case '#rectitude':
        $("#learning").fadeOut(400);
        $("#friendship").fadeOut(400);
        $("#rectitude").delay(delay).fadeIn(700);
        break;

    }
}
    
    $('.pillar-friendship').on('click',function(e){
        toggle_pillar(".pillar-friendship");
        toggle_text('#pillar-friendship');
      });
    
      $('.pillar-learning').on('click',function(e){
        toggle_pillar('.pillar-learning');
        toggle_text('#pillar-learning');
      });
    
      $('.pillar-rectitude').on('click',function(e){
        toggle_pillar('.pillar-rectitude');
        toggle_text('#pillar-rectitude');
      });

/*Rush Schedule*/

/*Open Divider*/
function openRush(div){
     //opening div
     $(div).find(".event-details").animate({
        height : $(div).find(".event-details")[0].scrollHeight
    },800);

    //event date
    $(div).find(".event-date").delay(400).animate({
            opacity: 1
        },200);

    //event description
    $(div).find(".event-desc").delay(600).animate({
        opacity: 1
    },200);

    //event location
    $(div).find(".event-location").delay(700).animate({
        opacity: 1
    },200);

    $(div).find("img.event-arrow-img").rotate({ endDeg:90, duration:0.4, persist:true });
        

}
/*Close Divider*/
function closeRush(div, closeAll){

    if(closeAll){

        $("img.event-arrow-img").rotate({ endDeg:0, duration:0.4, persist:true });

        $(div).delay(200).animate({
            height : 0
        },800);
    }
    else{
        $(div).find("img.event-arrow-img").rotate({ endDeg:0, duration:0.4, persist:true });

        $(div).find(".event-details").delay(200).animate({
            height : 0
        },800);

        
    }

    //event location
    $(div).find(".event-location").animate({
        opacity: 0
    },200);
    //event description
    $(div).find(".event-desc").delay(100).animate({
        opacity: 0
    },200);

    //event date
    $(div).find(".event-date").delay(400).animate({
        opacity: 0
    },200);

    
    
}

function closeAll(){
    $($("div#rush-item").find(".event-details")).each(function() {
        if($(this).height() != 0)
        closeRush(this, true);
    });
}
$("div#rush-item").click(function() {
    //close other open div
    closeAll();

    //if div is already open
    if($(this).find(".event-details").height() == 0){
        openRush(this);
    }
    //closing div
     else{
        closeRush(this);
    }
});


Date.prototype.addHours = function(h){
    console.log("clicked");
    this.setHours(this.getHours()+h);
    return this;
}

/*stop animation if calendar icon is clicked, and send calendar icon*/
$("div#rush-item .event-cal").click(function(e) {
    var myevent = $(this).parent().parent();
    e.stopPropagation();
    
    //create and populate calendar file
    var cal = ics();
    var subject = $(myevent).find('.event-name').text();
    var desc = $(myevent).find('.event-desc').text();
    var loc = $(myevent).find('.event-location').text();
    var begin = new Date($(myevent).find(".event-date").text().split(' ').join('T'));
    var end = new Date($(myevent).find(".event-date").text().split(' ').join('T'));
    end = end.setHours(end.getHours()+ 2);
    end = new Date(end);
    cal.addEvent(subject, desc, loc, begin, end);
    //download calendar
    cal.download("Rush Event");
});