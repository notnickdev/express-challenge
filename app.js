const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

const app = express();

const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(usersRoute);

// Unknown routes
app.use('', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
