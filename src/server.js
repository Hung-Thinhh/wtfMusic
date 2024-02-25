const express = require('express')
const configViewEngine = require("./config/viewEngine");
const db = require('./config/connectDb');
const  initWebRouter = require("./routes/web");
const initApiRouter = require("./routes/api");
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 8081

configViewEngine(app);
//conect database
db.connect()
// init web router
initWebRouter(app); 
initApiRouter(app); 

app.listen(PORT, () => {
    console.log(" Running on port " + PORT +":  http://localhost:" +PORT);
})