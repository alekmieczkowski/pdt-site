
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

