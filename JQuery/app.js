$(document).ready(function() {
    $("p").on({
        mouseenter : function() {
            $(this).css("font-size","40px")
        },
        mouseleave : function() {
            $(this).css("font-size","16px")
        }
    });
});