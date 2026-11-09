
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    }
});

// CLOSE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});

// FOOTER YEAR
const footer = document.querySelector("footer");

footer.innerHTML = footer.innerHTML.replace(
    "2026",
    new Date().getFullYear()
);

console.log("All India Truck Transport Website Loaded Successfully!");

// TRANSPORT ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const goods = document.getElementById("goods").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const whatsappMessage =
        "NEW TRANSPORT ENQUIRY\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Pickup: " + pickup + "\n" +
        "Destination: " + destination + "\n" +
        "Goods: " + goods + "\n" +
        "Details: " + message;

    const whatsappURL =
        "https://wa.me/919785695607?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
