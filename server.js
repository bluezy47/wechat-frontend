const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where your HTML files are located
app.set('views', path.join('/Users/anuruddha/Developer/PROJECT/wechat-frontend/public', 'views'));

// Route to render index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
