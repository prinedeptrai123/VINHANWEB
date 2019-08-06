$(window).ready(function() {
    $('#magazine').turn({
                        pages:6,
                        display: 'single',
                        acceleration: true,
                        gradients: !$.isTouch,
                        elevation:50,
                        when: {
                            turned: function(e, page) {
                                /*console.log('Current view: ', $(this).turn('view'));*/
                            }
                        }
                    });
});

$(document).on("click",".pre-page",function() {
    $('#magazine').turn('previous');
});

$(document).on("click",".next-page",function() {
    $('#magazine').turn('next');
});

$(document).on("click",".page-number",function() {
    $('#magazine').turn('page',$(this).attr('id'));
});

$(window).bind('keydown', function(e){
    
    if (e.keyCode==37)
        $('#magazine').turn('previous');
    else if (e.keyCode==39)
        $('#magazine').turn('next');
        
});