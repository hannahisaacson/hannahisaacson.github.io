jQuery(document).ready(function() {
    //Put the recipe card information in the modal:
    $(".card").on("click", function(){

        var contentToMove = $(this).html();

        //Move the text information to the modal:
        $(".card-content-modal").html(contentToMove);

        //Show the backdrop
        $(".backdrop").css("display", "block");

        //Show the modal
        $("#recipe-card-modal").toggle();

        //Close modal function
        function closeModal() {
            $(".backdrop").fadeOut();
            $("#recipe-card-modal").fadeOut();
        }

        //Close modal when button is clicked:
        $(".backdrop").on("click", closeModal);

        //Close modal with the close the modal button:
        $(".modal-close-button").on('click', closeModal);
    });


//Function for Back to Top Button

    //get the button:
    mybutton = document.getElementById("myButton");

    //When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function(){
        scrollFunction()};


    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block";
        }else {
            mybutton.style.display = "none";
        }
    }


    //When the user clicks on the button, scroll to the top of the page
    $(mybutton).on("click", function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });




});
