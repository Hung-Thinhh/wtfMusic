const express = require('express')

const path = require('path')

/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static(path.join('./src', 'public')));
    app.set('view engine', 'ejs');
    app.set("views", path.join('./src', 'views'));
}
module.exports = configViewEngine;