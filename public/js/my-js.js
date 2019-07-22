$('.full-image').on( "click", function() {
    
    var id = $(this).attr('id');

   displayImage(id);
    $('#modal_luan').modal('show')
});

//set 
function displayImage(id){
    $(`li`).removeClass("active");
    $(`.carousel-item`).removeClass("active");

    $(`li[data-slide-to='${id}']`).addClass("active");
    $(`.carousel-item[id='${id}']`).addClass("active");
    
}