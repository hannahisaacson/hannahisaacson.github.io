jQuery(document).ready(function() {
    //Put the recipe card information in the modal:
    $(".card").on("click", function(){

        var textToMove = $(this).html();

        //Move the text information to the modal:
        $(".card-content-modal").html(textToMove);

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
});