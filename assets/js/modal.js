$(function () {
    $("[modal-target]").click(function () {
        let modal=$(".modal-background#"+$(this).attr("modal-target"))
        openModal(modal);
    })
    $(".custom-modal a").click(function () {
        closeModal();
    })
    function openModal(modal) {
        // $("body").addClass("noscroll");
        modal.addClass("opened");
    }
    function closeModal() {
        // $("body").removeClass("noscroll");
        $(".modal-background").removeClass("opened");
    }
});