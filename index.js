const express = require('express');
const luis = require('./routes/luis');
const app = express();
const bodyParser = require('body-parser');
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/luis', luis);

app.listen(port, () => console.log(`LUIS app in currently running on PORT ${port}!`));

module.exports = app;