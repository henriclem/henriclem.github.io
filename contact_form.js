function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validate form data (you can add more validation if needed)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here you can send the form data to a server using AJAX or other methods
    // For simplicity, this example just displays a confirmation message on the page
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = "Thank you, " + name + "! We have received your inquiry. We will get back to you soon.";
}
