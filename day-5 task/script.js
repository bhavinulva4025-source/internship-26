const cardNumber = document.getElementById("cardNumber");
const cardPreview = document.getElementById("cardPreview");
const cardName = document.getElementById("cardName");
const namePreview = document.getElementById("namePreview");
const expiry = document.getElementById("expiry");
const form = document.getElementById("paymentForm");
const message = document.getElementById("message");

/* Card Number Formatting */
cardNumber.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    value = value.substring(0, 16);

    value = value.replace(/(.{4})/g, "$1 ").trim();

    this.value = value;

    cardPreview.textContent =
        value || "•••• •••• •••• ••••";
});

/* Card Holder Preview */
cardName.addEventListener("input", function () {

    namePreview.textContent =
        this.value.toUpperCase() || "CARD HOLDER";
});

/* Expiry MM/YY Formatting */
expiry.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    if (value.length > 2) {
        value =
            value.substring(0, 2) +
            "/" +
            value.substring(2, 4);
    }

    this.value = value;
});

/* Form Validation */
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const digits =
        cardNumber.value.replace(/\s/g, "");

    if (digits.length !== 16) {

        message.textContent =
            "Card number must contain exactly 16 digits.";

        message.className =
            "message error";

        return;
    }

    message.textContent =
        "Payment details validated successfully ✓";

    message.className =
        "message success";
});