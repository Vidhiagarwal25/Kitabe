document.addEventListener('DOMContentLoaded', function() {
    const emojiSelectors = document.querySelectorAll('.emoji-selector');
    const getRecommendationsBtn = document.getElementById('get-recommendations');
    const bookRecommendationsSection = document.getElementById('book-recommendations');

    // Function to handle emoji selection
    function handleEmojiSelection(event) {
        emojiSelectors.forEach(selector => selector.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    // Add event listeners to emoji selectors
    emojiSelectors.forEach(selector => {
        selector.addEventListener('click', handleEmojiSelection);
    });

    // Function to get recommendations
    function getRecommendations() {
        const selectedEmoji = document.querySelector('.emoji-selector.selected').getAttribute('data-emotion');

        // Here you would fetch book recommendations based on the selected emoji
        // For demonstration purposes, let's assume we have a static list of recommendations
        const recommendations = [
            { title: 'Book 1', author: 'Author 1', image: 'images/book1.jpg' },
            { title: 'Book 2', author: 'Author 2', image: 'images/book2.jpg' },
            { title: 'Book 3', author: 'Author 3', image: 'images/book3.jpg' },
            { title: 'Book 4', author: 'Author 4', image: 'images/book4.jpg' },
            { title: 'Book 5', author: 'Author 5', image: 'images/book5.jpg' }
        ];

        // Populate book recommendations
        bookRecommendationsSection.innerHTML = '';
        recommendations.forEach(book => {
            const bookBox = document.createElement('div');
            bookBox.classList.add('book-box');
            bookBox.innerHTML = `
                
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            `;
            bookRecommendationsSection.appendChild(bookBox);
        });
    }

    // Add event listener to Get Recommendations button
    getRecommendationsBtn.addEventListener('click', getRecommendations);
});
