require('express-async-errors');
const express = require('express');
const { globalError } = require('./middleware/globalError');
const { router } = require('./routes/index.router');
// ...

const app = express();

app.use(express.json());
app.use(router);
app.use(globalError.handle);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
