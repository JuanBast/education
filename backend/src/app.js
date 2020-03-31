const express = require('express');
const app = express();
const cors = require('cors');

// SETTINGS 
app.set('port', process.env.PORT || 4000);

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
app.use('/', (req, res) => res.send('Index page...'));

module.exports = app;