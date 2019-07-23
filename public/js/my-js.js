

$(document).ready(function () {
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
        var img = `<div class="col-lg-3 col-md-6 portfolio-item filter-xay-cau">
                        <div>
                            <img id="0" class="full-image" src="/img/activity/${i}.jpg" alt="">
                            <div class="details">
                                <span>19/07/2019</span>
                            </div>
                        </div>
                    </div>`;
        $(".team-activity").append(img);
    }
}