document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll('.booking-form');
    forms.forEach(function (form, index) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = serializeForm(form); // Explicitly cast form to HTMLFormElement
            var bookingData = {};
            formData.forEach(function (value, key) {
                bookingData[key] = value;
            });
            displayBookingDetails(index + 1, bookingData);
        });
    });
    function serializeForm(form) {
        var formData = new FormData();
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            formData.append(input.name, input.value);
        });
        return formData;
    }
    function displayBookingDetails(movieIndex, data) {
        var params = new URLSearchParams(data).toString();
        window.open("display.html?movieIndex=".concat(movieIndex, "&").concat(params), '_blank');
    }
});
