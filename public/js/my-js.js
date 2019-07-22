$('#luan').on( "click", function() {
    
    var img = $(this).attr('src');

    $('#modal_img').attr('src',img);
    $('#modal_luan').modal('show')
});