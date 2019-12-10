jQuery(document).ready(function() {

    //Shows All Cards onClick "All" 
    $(".all-button").click(function(){
        $(".card").fadeIn();
    });
    
    //Hides Sweet Cards when Savory Button is clicked
    $(".savory-button").click(function(){
        //resets to All cards first
        $(".card").fadeIn();
        //fades out sweet cards
        $(".card.sweet").hide();
    });

    //Hides Savory Cards when Sweet Button is clicked
    $(".sweet-button").click(function(){
         //resets to All cards first
         $(".card").fadeIn();
        //hides savory cards
        $(".card.savory").hide();
    });


});