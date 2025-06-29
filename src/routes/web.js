import express from 'express'
import {handleHome} from '../controller/homeController'
require('dotenv').config()

const router = express.Router();

const initWebRouter = (app) => {
    router.get("/", (req, res) => {
        res.send("Hello World from web router",process.env.CLIENT);
    });
    // router.get("/user", homeController.handleCreateUser);
    // router.post("/user/create-user", homeController.handleCreateNewUser);
    // router.post("/delete-user/:id", homeController.handleDeleteUser);
    // router.post("/edit-user/", homeController.handleEditUser);
    // router.get("/edit-user/:id", homeController.handleEdit);
    return app.use("/", router);
}

export default initWebRouter;