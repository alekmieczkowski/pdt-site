
/*Future events*/
$(document).ready(function(){

 
    var speed = 1;
    var container =  $('.future-events');
    $('.future-events-wrapper').endless({
      direction:'horizontal',
      scrollbar:'disable'
    });
   
    var timeout;
    
    function loop(){
      console.log("loop executed");
      timeout = window.setTimeout(function() {
        //window.clearTimeout(timeout);
        container.scrollLeft(container.scrollLeft() + speed);
        loop();
      }, 20); 
    }



    function stop(){
      window.clearTimeout(timeout);
    }

    $(".future-events-wrapper").ready(loop); 
    $(".future-events-wrapper").hover(stop, loop); 
    
    $("h2").fitText(2.1);
    $(".endless").width("");

  });
 /*Pull in google calendar information*/
 var mykey = 'AIzaSyDSPiDsEFOFpKLXfl-Rf9VE8mhBVMM-1E0'; 
 var calendarid = 'kdtollhp92mt19k0lton3rr12o@group.calendar.google.com'; 

var cal = $.grabCalendar({
	type: "events",
    //clean_date: true,
    maxEvents: 5
});

console.log(cal);
//console.log(cal[0]["summary"]);
//create new calendar item in html for each event
$.each(cal, function(index, event){
    var div = document.createElement('div');
    div.setAttribute('class', 'text-center');
    var event_date;

    if(event["start"] == undefined)
    {
      event_date = "All Day";
    }else{
      event_date = event["start"].slice(0,10);
    }
    //console.log(event_date);
    div.setAttribute('id', 'future-item');
    div.innerHTML = `
        <h2 id="#responsive_headline"><b>${event["summary"]}</b></h2>
        <h3>${event_date}</h3>
        <img class="future-btn img-responsive center-block" src="${img}" />
    `;
    
    $('.future-events-wrapper').append(div);

});


