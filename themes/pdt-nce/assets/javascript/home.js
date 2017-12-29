    //create id obj
    var option_id = new Object();
    option_id["#pillar-friendship"] = ["../images/home/sound-learning.png", "../images/home/sound-learning-overlay.png"];
    option_id["#pillar-learning"] = ["../images/home/sound-learning.png", "../images/home/sound-learning-overlay.png"];
    option_id["#pillar-rectitude"] = ["../images/home/sound-learning.png", "../images/home/sound-learning-overlay.png"];

function toggle_pillar(pillar_name){

    //grabs copy of option list
    var id = option_id;
    
    //set image for selected
    $(pillar_name).attr("src",id[pillar_name][1]);

    //remove current ID from ID's
    delete id[pillar_name];

    //remove overlay if exists
    for(var i  in id){
        $(i).attr("src",id[i][0]);
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

