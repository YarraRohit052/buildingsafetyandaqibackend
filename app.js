const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const sensorDataRoutes = require('./routes/sensordataRoutes');
const expDataRoutes = require("./routes/experimentdataRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensorDataRoutes);
app.use("/exp", expDataRoutes);

const port=process.env.PORT || 5006

mongoose.set('strictQuery', false);

mongoose
    .connect(
        'mongodb+srv://firesafety:123aes456@cluster0.gxvnnwa.mongodb.net/firesafety?retryWrites=true&w=majority'
    )
    .then((result) => {
        console.log("app is running...");
        app.listen(port);
    }).catch((err)=>{
        console.log(err);
    });
