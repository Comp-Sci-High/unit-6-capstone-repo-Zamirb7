const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Sample data that Mohamed can eventually update via a dashboard
const announcements = [
    { title: "Rainy Day Special", detail: "20% off all interior cleans today!" },
    { title: "New Service", detail: "Ceramic Coating now available." }
];

const services = [
    { name: "Express Wash", price: "$40", desc: "Exterior wash and tire shine." },
    { name: "Full Detail", price: "$150", desc: "Deep clean inside and out." },
    { name: "Ceramic Coating", price: "$500+", desc: "Premium long-term protection." }
];

app.get('/', (req, res) => {
    res.render('index', { 
        announcements: announcements, 
        services: services,
        squareBookingUrl: "https://squareup.com/appointments/book/your-link-here" 
    });
});

app.post('/feedback', (req, res) => {
    console.log("Feedback received:", req.body.comment);
    // In a real app, you'd save this to a database
    res.send("Thank you for your feedback!");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});