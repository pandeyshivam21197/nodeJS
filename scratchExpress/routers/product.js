const express=require("express");
const router=express.Router();
const data=require("/home/nineleaps/Desktop/node js exmpls/npmodules/scratchExpress/data/seed.json");

router.get("/product",function(req,res){
        res.json(data.products);
    })

router.get("/product/:productId",function(req,res){
    //since its not a query string its in path ,therefore we use req.params.productId

    const productId= parseInt(req.params.productId);
    if(isNaN(productId))
    {
        res.status(400).send("Invalid product id");
        return;
    }
    else{
        const product=data.products.find(function(prod){
            return prod.id===productId;
        })
    }
    res.json(product);
})
module.exports=router;