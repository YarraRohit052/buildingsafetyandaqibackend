const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const experimentSchema=new Schema(
    {
        
        temperature:{ type: Schema.Types.Number, required: true },
        humidity:{ type: Schema.Types.Number, required: true },
        aqi:{ type: Schema.Types.Number, required: true },
        gasdetector:{ type: Schema.Types.Number, required: true },
        firedetector:{ type: Schema.Types.Number, required: true },
        
    },
    { timestamps: true }
);
module.exports = mongoose.model("experimentSchema",experimentSchema);