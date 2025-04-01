const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectMongo = require("../connection/mongo-connect");
const cookieParser = require("cookie-parser");

const routes = require("../routes/index")
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173"}));
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/",routes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port: ${process.env.PORT}`);
})

connectMongo(process.env.MONGOURL);