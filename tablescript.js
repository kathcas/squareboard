$(document).ready(function () {

    //init pop-ups
    $(".popup").attr("data-close", false);

    //click on pop-up opener.
    //pop-up is expected to be a child of opener
    $(".more_info").click(function () {
        var $title = $(this).find(".popup");
        //open if not marked for closing
        if ($title.attr("data-close") === "false") {
            $title.show();
        }
        //reset popup         
        $title.attr("data-close", false);
    });

    //mark pop-up for closing if clicked on
    //close is initiated by document.mouseup, 
    //marker will stop opener from re-opening it
    $(".popup").click(function () {
        $(this).attr("data-close",true);
    });

    //hide all pop-ups
    $(document).mouseup(function () {
        $(".popup").hide();

    });

    //show on rollover if mouse is used
    $(".more_info").mouseenter(function () {
        var $title = $(this).find(".popup");
        $title.show();
    });

    //hide on roll-out
    $(".more_info").mouseleave(function () {
        var $title = $(this).find(".popup");
        $title.hide();
    });  

});
