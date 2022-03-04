const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function() {
    // TODO: Consider capitalizing the first character of each comment
    // Toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Toggle the icon
    this.classList.toggle("bi-eye");
});

// Prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
});