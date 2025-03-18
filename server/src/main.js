const express =  require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("../routes/index")

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",routes)
app.get('/',(req,res)=>{
    res.send("API is running...");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is startedon port: ${process.env.PORT} `);
})