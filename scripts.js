document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const icon = this;

    // Toggle password visibility
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
        icon.src = "hide.png";       // Switch icon to "hide"
    } else {
        passwordField.type = "password"; // Hide password
        icon.src = "show.png";           // Switch icon to "show"
    }
});
