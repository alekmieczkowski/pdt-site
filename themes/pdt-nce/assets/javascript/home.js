       
function getData(){
    $.request('onPillarsCall', {
        success: function(data) {
            return data;
        }
    });
}
function toggle_pillar(pillar_name){
    
         //create id obj
         var arr = $.map(getData(), function(el) { return el });
        //set image for selected
        $(pillar_name).attr("src",id[pillar_name][1]);
        console.log(option_id[pillar_name][1]);
    
        //remove current ID from ID's
        delete option_id[pillar_name];
    
        //remove overlay if exists
        for(var i  in option_id){
            $(i).attr("src",option_id[i][0]);
            console.log(i);
        }
    
    
    
        
    }
    
    $('#pillar-friendship').on('click',function(e){
        toggle_pillar("#pillar-friendship");
      });
    
      $('#pillar-learning').on('click',function(e){
        toggle_pillar('#pillar-learning');
      });
    
      $('#pillar-rectitude').on('click',function(e){
        toggle_pillar('#pillar-rectitude');
      });
    