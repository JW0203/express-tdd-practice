const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://widwoo0203:4258@cluster0.miwva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

app.use(express.json());
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my website!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);