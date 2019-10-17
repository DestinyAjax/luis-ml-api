// const express = require('express');
// const luis = require('./routes/luis');
// const app = express();
// const bodyParser = require('body-parser');
// const port = 9000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/luis', luis);

// app.listen(port, () => console.log(`LUIS app in currently running on PORT ${port}!`));

// module.exports = app;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
});

const intentRoutes = require('./routes/intent.routes');
const entityRoutes = require('./routes/entity.routes');
const utteranceRoutes = require('./routes/utterance.routes');
const modelRoutes = require('./routes/model.routes');
const appRoutes = require('./routes/app.routes');

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to LUIS app'});
});

app.use('/api/v1/luis', intentRoutes);
app.use('/api/v1/luis', entityRoutes);
app.use('/api/v1/luis', utteranceRoutes);
app.use('/api/v1/luis', modelRoutes);
app.use('/api/v1/luis', appRoutes);

module.exports = app;