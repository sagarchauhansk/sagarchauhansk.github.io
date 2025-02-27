const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files (CSS, JS)

const data = require('./data.json');

app.get('/', (req, res) => {
  res.render('index', { data });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
