const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files

const data = require('./data.json');

app.get('/', (req, res) => {
    res.render('index', { data });
});

app.get('/generate-html', (req, res) => {
    res.render('index', { data }, (err, html) => {
        if (err) {
            return res.send('Error rendering EJS');
        }
        fs.writeFileSync('index.html', html);
        res.send('index.html generated');
    });
});

app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
});

