

//Mảng hình ảnh xây cầu
var arr_xay_cau = ['https://imgur.com/uONKmEl'];

$(document).ready(function () {

    $(document).on("click",".img-activity",function() {
        var src = $(this).attr('src');
        $("#img-large").attr('src',src);
        $('#modal_img_activity').modal('show')
    });

    createImage();

    $('#action-xc').click(); 

});

$('.full-image').on("click", function () {

    var id = $(this).attr('id');

    displayImage(id);
    $('#modal_luan').modal('show')
});


$('.button-filter').on("click", function () {
    //remove class
    $('.button-filter').removeClass("li-filter");

    //change color
    $(this).addClass("li-filter");
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

        var url = createXCURL(i);

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

    for (var i = 0; i < 11; i++) {

        var url = createTTURL(i);

        var img = `<div class="col-lg-3 col-md-6 portfolio-item filter-truyen-tin">
                        <div>
                            <img id="0" class="full-image img-activity" src="${url}" alt="">
                            <div class="details">
                                <span>26/07/2019</span>
                            </div>
                        </div>
                    </div>`;
        $(".team-activity").append(img);
    }

    for (var i = 0; i < 13; i++) {

        var url = createQPURL(i);

        var img = `<div class="col-lg-3 col-md-6 portfolio-item filter-quay-phim">
                        <div>
                            <img id="0" class="full-image img-activity" src="${url}" alt="">
                            <div class="details">
                                <span>27/07/2019</span>
                            </div>
                        </div>
                    </div>`;
        $(".team-activity").append(img);
    }

    for (var i = 1; i < 15; i++) {

        var url = createPTURL(i);

        var img = `<div class="col-lg-3 col-md-6 portfolio-item filter-poster">
                        <div>
                            <img id="0" class="full-image img-activity" src="${url}" alt="">
                            <div class="details">
                                <span>03/08/2019</span>
                            </div>
                        </div>
                    </div>`;
        $(".team-activity").append(img);
    }
}

//Tạo url 
function createXCURL(id){
    return `/img/activity/xaycau/${id}.JPG`;
}

function createTTURL(id){
    return `/img/activity/truyentin/tt-${id}.jpg`;
}

function createQPURL(id){
    return `/img/activity/quayphim/qp-${id}.JPG`;
}

function createPTURL(id){
    return `/img/activity/poster/${id}.jpg`;
}