$(document).ready(function() {
    $('#bookButton').on('click', function() {
      let selectedSeats: string[] = [];
      $('input[name="tickets"]:checked').each(function() {
        selectedSeats.push((<HTMLInputElement>this).getAttribute('id') || '');
      });
      let totalAmount = $('.amount').text();
      let selectedDate = $('input[name="date"]:checked + label .date').text();
      let selectedTime = $('input[name="time"]:checked + label').text().trim();
  
      // Encode data into URL parameters
      let params = new URLSearchParams();
      params.append('selectedSeats', selectedSeats.join(','));
      params.append('totalAmount', totalAmount);
      params.append('selectedDate', selectedDate);
      params.append('selectedTime', selectedTime);
  
      // Redirect to the booking form page with data as URL parameters
      window.location.href = 'booking_form.html?' + params.toString();
    });
  });
  