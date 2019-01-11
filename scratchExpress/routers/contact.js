const express=require("express");
const router=express.Router();

router.get("/contact",function(req,res){
    res.send("CONTACT PAGE");
})
module.exports=router;