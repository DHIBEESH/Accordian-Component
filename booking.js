$(document).ready(function () {
    $('#bookButton').on('click', function () {
        var selectedSeats = [];
        $('input[name="tickets"]:checked').each(function () {
            selectedSeats.push(this.getAttribute('id') || '');
        });
        var totalAmount = $('.amount').text();
        var selectedDate = $('input[name="date"]:checked + label .date').text();
        var selectedTime = $('input[name="time"]:checked + label').text().trim();
        // Encode data into URL parameters
        var params = new URLSearchParams();
        params.append('selectedSeats', selectedSeats.join(','));
        params.append('totalAmount', totalAmount);
        params.append('selectedDate', selectedDate);
        params.append('selectedTime', selectedTime);
        // Redirect to the booking form page with data as URL parameters
        window.location.href = 'booking_form.html?' + params.toString();
    });
});
