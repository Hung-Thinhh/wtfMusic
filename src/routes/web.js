import express from 'express'
import {handleHome} from '../controller/homeController'
require('dotenv').config()

const router = express.Router();

const initWebRouter = (app) => {
   router.get("/", (req, res) => {
    res.json({
        message: "Hello World from web router",
        client: process.env.CLIENT
    });
});

    return app.use("/", router);
}

export default initWebRouter;