const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample FAQ data
const faqData = [
    { question: 'What is your return policy?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'How do I contact customer support?', answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { question: 'Can I cancel my subscription?', answer: 'Nulla facilisi. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to serve FAQ data
app.get('/faq', (req, res) => {
    res.json(faqData);
});

// Route to handle form submission
app.post('/contact', (req, res) => {
    // Here you can handle the form submission, send emails, etc.
    // For this example, we'll just send back a success message
    res.json({ message: 'Your message has been received. We will get back to you soon.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});
