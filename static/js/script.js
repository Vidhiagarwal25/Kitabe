document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform form validation here if needed

        // Assuming form validation is successful, you can redirect the user to the home page
        var indexUrl = "{{ url_for('index') }}";
        window.location.href = "/#"; // Replace "home.html" with the URL of your home page
    });
});

  
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const searchTerm = document.getElementById('search-input').value;
    // Perform search based on searchTerm
    alert('Searching for: ' + searchTerm);
  });

