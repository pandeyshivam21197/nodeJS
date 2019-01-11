const express=require("express");

const router=express.Router();

router.get('/',function(req,res){
    res.send("Iam a store server.You can ask me for product and review for products");
})

module.exports=router;