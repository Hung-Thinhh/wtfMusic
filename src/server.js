const express = require('express')
const configViewEngine = require("./config/viewEngine");
const db = require('./config/connectDb');
const  initWebRouter = require("./routes/web");
const initApiRouter = require("./routes/api");
const cors = require('cors');
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 8081

const corsOptions = {
    origin: 'http://localhost:3000', // Thay đổi địa chỉ này thành nguồn gốc của ứng dụng của bạn
    optionsSuccessStatus: 200 // Mã trạng thái thành công mặc định khi yêu cầu CORS thành công
  };
  
  // Sử dụng middleware CORS trên tất cả các yêu cầu
app.use(cors(corsOptions));
  
configViewEngine(app);
//conect database
db.connect()
// init web router
initWebRouter(app); 
initApiRouter(app); 

app.listen(PORT, () => {
    console.log(" Running on port " + PORT +":  http://localhost:" +PORT);
})