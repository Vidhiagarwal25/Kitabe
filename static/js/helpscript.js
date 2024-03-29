// Client-side JavaScript code for dynamic content and form submission handling

document.addEventListener('DOMContentLoaded', function () {
    // Fetch FAQ content from the server
    fetch('/faq')
        .then(response => response.json())
        .then(data => {
            const faqContent = document.getElementById('faq-content');
            data.forEach(item => {
                const question = document.createElement('p');
                question.textContent = item.question;
                const answer = document.createElement('p');
                answer.textContent = item.answer;
                faqContent.appendChild(question);
                faqContent.appendChild(answer);
            });
        })
        .catch(error => console.error('Error fetching FAQ:', error));

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const contactResponse = document.getElementById('contact-response');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        fetch('/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            contactResponse.textContent = data.message;
            contactForm.reset();
        })
        .catch(error => console.error('Error submitting form:', error));
    });
});
