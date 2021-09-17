const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const cors = require("cors")
const app = express()
const multer = require("multer")
const path = require("path")

dotenv.config()

mongoose.connect("mongodb+srv://admin:qsvQjmPPnADSp83d@pawhelper.5qct4.mongodb.net/moneyO", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use("/images", express.static(path.join(__dirname , "/public/images")))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))