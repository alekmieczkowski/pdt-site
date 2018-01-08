$(document).ready(function (){
    
    //On button click scroll down
     $("#icon").click(function (){
        console.log("click");
        $("body").scrollTo('#timeline', 1000);
    });
});