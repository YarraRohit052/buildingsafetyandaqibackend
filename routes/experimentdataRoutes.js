const express = require('express');

const router=express.Router();

const expdataController=require("../controllers/experimentdatacontroller");

router.post("/postdata",expdataController.expdataHandler);

router.get("/allsensordata", expdataController.allsenosrdataHandler);

module.exports=router;