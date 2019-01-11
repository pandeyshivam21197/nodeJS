const express=require("express");
const router=express.Router();

router.get("/about",function(req,res){
    res.send("ABOUT PAGE");
})

module.exports=router;