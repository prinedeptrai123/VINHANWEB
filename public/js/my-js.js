

//Mảng hình ảnh xây cầu
var arr_xay_cau = ['https://imgur.com/uONKmEl'];

$(document).ready(function () {

    $(document).on("click",".img-activity",function() {
        var src = $(this).attr('src');
        $("#img-large").attr('src',src);
        $('#modal_img_activity').modal('show')
    });

    createImage();
});

$('.full-image').on("click", function () {

    var id = $(this).attr('id');

    displayImage(id);
    $('#modal_luan').modal('show')
});



//set 
function displayImage(id) {
    $(`li`).removeClass("active");
    $(`.carousel-item`).removeClass("active");

    $(`li[data-slide-to='${id}']`).addClass("active");
    $(`.carousel-item[id='${id}']`).addClass("active");

}

//add function
function createImage() {
    for (var i = 0; i < 15; i++) {

        var url = createURL(i);

        var img = `<div class="col-lg-3 col-md-6 portfolio-item filter-xay-cau">
                        <div>
                            <img id="0" class="full-image img-activity" src="${url}" alt="">
                            <div class="details">
                                <span>19/07/2019</span>
                            </div>
                        </div>
                    </div>`;
        $(".team-activity").append(img);
    }
}

//Tạo url 
function createURL(id){
    return `/img/activity/${id}.jpg`;
   // return `https://firebasestorage.googleapis.com/v0/b/oderfood-cf526.appspot.com/o/activityimage%2Fxaycau%2F${id}.JPG?alt=media&token=240c764f-65c4-48cb-97c3-ae45a2b8e23f`;
}