const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth");
const algoRoute = require("./routes/algo");
const helmet = require("helmet")
const cors = require("cors")
const app = express()
const multer = require("multer")
const path = require("path")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,
  {useNewUrlParser:true , useUnifiedTopology: true},
  () => {console.log("Connected to Mongo");})


app.use(express.json());
app.use(helmet())
app.use(cors());

app.use(morgan('tiny'))



app.use('/api/users' , userRoute);
app.use('/api/auth' , authRoute);
app.use('/api/algo', algoRoute);


app.listen(5000, () => {console.log("~~~~ Server Started ~~~~");})