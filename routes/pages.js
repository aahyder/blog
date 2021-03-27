// pages.js
// set up middleware
const express = require('express');
const router = express.Router();

// set up smtp / email
const notification = require('../utils/email-utils');

router.get('/', (req, res, next) => {
    res.redirect('/index');
});

router.get('/index', (req, res, next) => {
    res.render('index.ejs');
});

module.exports = router;