function signupWithInstagram() {
    // Handle sign up with Instagram
}

function signupWithGoogle() {
    // Handle sign up with Google
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault(); // Prevent form submission
    }
});

