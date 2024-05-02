var OrderFormSnack = /** @class */ (function () {
    function OrderFormSnack() {
    }
    OrderFormSnack.prototype.submitForm = function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var screen = document.getElementById('screen').value;
        var seatType = document.getElementById('seatType').value;
        var seatNo = document.getElementById('seatNo').value.trim();
        var snackType = document.getElementById('snackType').value;
        var snackQuantity = document.getElementById('quantity').value.trim();
        var juiceType = document.getElementById('juiceType').value;
        var juiceQuantity = document.getElementById('juiceQuantity').value.trim();
        if (!name || !snackQuantity || !seatNo || !juiceQuantity) {
            this.displayMessage('<div class="alert alert-danger" role="alert">Please fill in all fields.</div>');
            return;
        }
        this.displayMessage("<div class=\"alert alert-success\" role=\"alert\">Thanks for your Order!!<br>Order submitted successfully.<br>You will receive the order in a minute<br>Visit again and enjoy your snacks</div>");
        this.resetForm();
    };
    OrderFormSnack.prototype.resetForm = function () {
        document.getElementById('orderForm').reset();
    };
    OrderFormSnack.prototype.displayMessage = function (message) {
        var responseContainer = document.getElementById('response');
        if (responseContainer) {
            responseContainer.innerHTML = message;
        }
    };
    return OrderFormSnack;
}());
var orderFormSnack = new OrderFormSnack();
document.getElementById('orderForm').addEventListener('submit', function (event) {
    orderFormSnack.submitForm(event);
});
