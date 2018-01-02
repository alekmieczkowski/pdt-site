$( document ).ready(function() {
    $("#friendship").fadeOut(1);
    $("#rectitude").fadeOut(1);
});

function toggle_pillar(pillar_name){
    $.request('onPillarsCall', {
        success: function(data) {
             //create id obj
         var id = $.map(data, function(el) { return el });
         console.log("id: "+id);
         //set image for selected
         $(pillar_name).attr("src",id[pillar_name][1]);
         console.log(id[pillar_name][1]);
     
         //remove current ID from ID's
         delete id[pillar_name];
     
         //remove overlay if exists
         for(var i  in id){
             $(i).attr("src",id[i][0]);
             console.log(i);
         }
        }
    });
    
    }

function toggle_text(pillar_name){
    //get text tag
    var tag = pillar_name.replace('pillar-','');
    switch(tag){
        case '#friendship':
        $("#learning").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#friendship").fadeIn(700).delay(500);
        console.log("friendship");
        break;
        case '#learning':
        $("#friendship").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#learning").fadeIn(700).delay(500);
        console.log("learning");
        break;
        case '#rectitude':
        $("#learning").fadeOut(400);
        $("#friendship").fadeOut(400);
        $("#rectitude").fadeIn(700).delay(500);
        console.log("rectitude");
        break;

    }
}
    
    $('#pillar-friendship').on('click',function(e){
        toggle_pillar("#pillar-friendship");
        toggle_text('#pillar-friendship');
      });
    
      $('#pillar-learning').on('click',function(e){
        toggle_pillar('#pillar-learning');
        toggle_text('#pillar-learning');
      });
    
      $('#pillar-rectitude').on('click',function(e){
        toggle_pillar('#pillar-rectitude');
        toggle_text('#pillar-rectitude');
      });
    