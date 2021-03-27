// server.js
// set up server constants
const express = require('express');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();
const port = 80;

// intialize app
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

// serve routes
app.use('/', pageRouter);

// 404 error
app.use((req, res, next) =>  {
    var err = new Error('404 ERROR: Page not found');
    err.status = 404;
    next(err);
})

// error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// start server
app.listen(port, () => {
    console.log(`server app listening at http://localhost:${port}`);
  })
