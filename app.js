const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const sensorDataRoutes = require('./routes/sensordataRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensorDataRoutes);
mongoose.set('strictQuery', false);

mongoose
    .connect(
        'mongodb+srv://firesafety:123aes456@cluster0.gxvnnwa.mongodb.net/firesafety?retryWrites=true&w=majority'
    )
    .then((result) => {

        console.log("app is running...");
        app.listen(5006);
    }).catch((err)=>{
        console.log(err);
    });
