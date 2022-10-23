$(document).ready(function() {
    $(".btn-escape").on("mouseover", function() {
        if($(this).hasClass('catched')) {
            return true;
        }

        $(this).css({
            'top': Math.random() * ($(".btn-wrap").innerHeight()-45) + 'px',
            'left': Math.random() * ($(".btn-wrap").innerWidth()-200) + 'px'
        });

        $(".btn-escape").on("click", function() {
            $(this).html("You caught me...").addClass('catched');
            $(this).css('background', '#DC143C');
            $(this).css('box-shadow', '0 0 10px #DC143C');
            $(".btn-wrap").css('border-color', "#DC143C");
        });
    });

});