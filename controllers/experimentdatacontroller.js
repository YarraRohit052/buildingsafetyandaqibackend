const experimentData=require("../models/experiment");

const expdataHandler=async(req,res,next)=>{
    //console.log(req.body);
    res.status(200).json({
        message: "Post Request Received Successfully"
    });
}

const allsenosrdataHandler=async (req,res,next)=>{
    let expdata;
    try {
    expdata = await experimentData.find().sort('createdAt').limit();
        
        //console.log(sensordata);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    //console.log(expdata);
    res.status(200).json({
        data:expdata
    });
}
exports.expdataHandler=expdataHandler;
exports.allsenosrdataHandler=allsenosrdataHandler;