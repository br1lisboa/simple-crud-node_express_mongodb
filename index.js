const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.route');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/products', productRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});

// connection to the database
mongoose
    .connect('mongodb+srv://admin:1q2w3e4r5t6y7u@node-express-1.5okrvuy.mongodb.net/')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log('Error connecting to the database');
        console.log(err);
    });
