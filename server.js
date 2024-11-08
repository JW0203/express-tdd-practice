const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my website!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);