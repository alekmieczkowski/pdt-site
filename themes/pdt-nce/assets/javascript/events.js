
/*Future*/
$(document).ready(function(){

    
    var speed = 1;
    var container =  $('.future-events');
    $('.future-events-wrapper').endless({
      direction:'horizontal',
      scrollbar:'disable'
    });
   
    var timeout;
    
    function loop(){
      timeout = window.setTimeout(function() {
        window.clearTimeout(timeout);
        container.scrollLeft(container.scrollLeft() + speed);
        loop();
      }, 20); 
    }



    function stop(){
      window.clearTimeout(timeout);
    }
  
    $(".future-events-wrapper").ready(loop); 
    $(".future-events-wrapper").hover(stop, loop); 
    
 
  });