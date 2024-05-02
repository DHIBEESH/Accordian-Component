
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('.booking-form');

    forms.forEach((form, index) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = serializeForm(form as HTMLFormElement); // Explicitly cast form to HTMLFormElement
            const bookingData = {};
            formData.forEach((value, key) => {
                bookingData[key] = value;
            });

            displayBookingDetails(index + 1, bookingData);
        });
    });

    function serializeForm(form: HTMLFormElement): FormData {
        const formData = new FormData();
        const inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
            formData.append(input.name, input.value);
        });
        return formData;
    }

    function displayBookingDetails(movieIndex: number, data: any) {
        const params = new URLSearchParams(data).toString();
        window.open(`display.html?movieIndex=${movieIndex}&${params}`, '_blank');
    }
});
