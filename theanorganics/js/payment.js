// payment.js
$(document).ready(function () {
    const $popupTrigger = $('#popup-trigger');
    const $popupOverlay = $('#popup-overlay');
    const $cancelButton = $('#cancel-button');

    $popupTrigger.click(function () {
        $popupOverlay.fadeIn();
    });

    $popupOverlay.click(function (event) {
        if (event.target === this) {
            $popupOverlay.fadeOut();
        }
    });

    $cancelButton.click(function () {
        $popupOverlay.fadeOut();
    });
});
function toggleForm() {
    var checkbox = document.getElementById("option-order");
    var form = document.getElementById("address-form");

    if (checkbox.checked) {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}
$(document).ready(function () {
    $('input[name="paymentMethod"]').change(function () {
        if ($(this).val() === "bank") {
            $('.payment-options').show();
        } else {
            $('.payment-options').hide();
        }
    });
});

