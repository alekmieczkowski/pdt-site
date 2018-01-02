       
function getData(){
    
}
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
    
    $('#pillar-friendship').on('click',function(e){
        toggle_pillar("#pillar-friendship");
      });
    
      $('#pillar-learning').on('click',function(e){
        toggle_pillar('#pillar-learning');
      });
    
      $('#pillar-rectitude').on('click',function(e){
        toggle_pillar('#pillar-rectitude');
      });
    