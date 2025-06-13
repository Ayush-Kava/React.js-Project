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

const allowedOrigins = [
  "http://localhost:5173",
  "https://react-js-project-static.onrender.com",
  "https://react-js-project-x123.onrender.com"   // <— add this
];
app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);           // allow curl/Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`CORS policy violation: ${origin} not allowed`));
  },
  credentials: true,
}));


app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/",routes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port: ${process.env.PORT}`);
})

connectMongo(process.env.MONGOURL);
