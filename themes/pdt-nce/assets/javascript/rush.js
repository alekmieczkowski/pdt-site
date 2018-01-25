/*Rush Schedule*/

/*Open Divider*/
function openRush(div){
    //opening div
    $(div).find(".event-details").velocity({
       height : $(div).find(".event-details")[0].scrollHeight
   },800);

   //event date
   $(div).find(".event-date").delay(400).velocity({
           opacity: 1
       },200);

   //event description
   $(div).find(".event-desc").delay(600).velocity({
       opacity: 1
   },200);

   //event location
   $(div).find(".event-location").delay(700).velocity({
       opacity: 1
   },200);

   $(div).find("img.event-arrow-img").rotate({ endDeg:90, duration:0.4, persist:true });
       

}
/*Close Divider*/
function closeRush(div, closeAll){

   if(closeAll){

       $("img.event-arrow-img").rotate({ endDeg:0, duration:0.4, persist:true });

       $(div).delay(200).velocity({
           height : 0
       },800);
   }
   else{
       $(div).find("img.event-arrow-img").rotate({ endDeg:0, duration:0.4, persist:true });

       $(div).find(".event-details").delay(200).velocity({
           height : 0
       },800);

       
   }

   //event location
   $(div).find(".event-location").velocity({
       opacity: 0
   },200);
   //event description
   $(div).find(".event-desc").delay(100).velocity({
       opacity: 0
   },200);

   //event date
   $(div).find(".event-date").delay(400).velocity({
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
   var begin = new Date($(myevent).find("#event-date-tag").text().split(' ').join('T'));
   var end = new Date($(myevent).find("#event-date-tag").text().split(' ').join('T'));
   end = end.setHours(end.getHours()+ 2);
   end = new Date(end);
   cal.addEvent(subject, desc, loc, begin, end);
   //download calendar
   cal.download("Rush Event");
});