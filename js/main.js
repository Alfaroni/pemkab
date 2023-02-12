$(function () {
   //header.stick
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= 0) {
            $('.header').addClass('stick');
        }
        else {
            $('.header').removeClass('stick');
        }
    });

    //toggle
    $(document).on('click', '[data-toggle]', function(e){
        var attr = $(this).data('toggle') 
        $(this).toggleClass('active');
        $('[data-toggle-open='+attr+']').toggleClass('open');
        $('body').toggleClass('overflow-hidden');
        e.preventDefault();
    });
    $(document).on('click', '[data-toggle-close]', function(e){
        $("[data-toggle-open].open").removeClass('open');
        $("[data-toggle].active").removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $(document).on('click', '[data-toggle=login]', function(e){
        $("[data-toggle-open=menu].open").removeClass('open');
        $("[data-toggle=menu].active").removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $(document).on('click', '[data-toggle=chart]', function(e){
        $('body').removeClass('overflow-hidden');
    });

    

    //dropdown
    $(document).on('click', '[data-dropdown]', function(e){
        var attr = $(this).data('dropdown') 
        $('[data-dropdown-open='+attr+']').toggleClass('open');
        e.preventDefault();
    });

    //outside.click
    $(document).mouseup(function(e) {
        var dropdown = $("[data-toggle].active, [data-toggle-open].open");
        if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
           $('[data-toggle-close]').trigger('click');
        }
    }); 

});



