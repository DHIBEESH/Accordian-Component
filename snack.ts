class OrderFormSnack {
    submitForm(event: Event): void {
        event.preventDefault();
        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const screen = (document.getElementById('screen') as HTMLSelectElement).value;
        const seatType = (document.getElementById('seatType') as HTMLSelectElement).value;
        const seatNo = (document.getElementById('seatNo') as HTMLInputElement).value.trim();
        const snackType = (document.getElementById('snackType') as HTMLSelectElement).value;
        const snackQuantity = (document.getElementById('quantity') as HTMLInputElement).value.trim();
        const juiceType = (document.getElementById('juiceType') as HTMLSelectElement).value;
        const juiceQuantity = (document.getElementById('juiceQuantity') as HTMLInputElement).value.trim();

        if (!name || !snackQuantity || !seatNo || !juiceQuantity) {
            this.displayMessage('<div class="alert alert-danger" role="alert">Please fill in all fields.</div>');
            return;
        }

        this.displayMessage(`<div class="alert alert-success" role="alert">Thanks for your Order!!<br>Order submitted successfully.<br>You will receive the order in a minute<br>Visit again and enjoy your snacks</div>`);

        this.resetForm();
    }

    resetForm(): void {
        (document.getElementById('orderForm') as HTMLFormElement).reset();
    }

    displayMessage(message: string): void {
        const responseContainer = document.getElementById('response');
        if (responseContainer) {
            responseContainer.innerHTML = message;
        }
    }
}

const orderFormSnack = new OrderFormSnack();

document.getElementById('orderForm')!.addEventListener('submit', (event) => {
    orderFormSnack.submitForm(event);
});
