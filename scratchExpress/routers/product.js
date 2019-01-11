"use strict";
const express=require("express");
const router=express.Router();
const data=require("/home/nineleaps/Desktop/node js exmpls/npmodules/scratchExpress/data/seed.json");

router.get("/product",function(req,res){
        res.json(data.products);
    })

router.post("/product",function(req,res){
    //no need of creatinf body object as it was in case of node js
    const product=req.body;
    if(!req.body) //false,undefined,null
    {
        res.json({message:"product not present"});
        return;
    }
    if(!product.name||!product.price||!product.code)
    {
        res.json({message:"nam,price,code not present"});
        return;
    }
    if(!product.releaseDate)

    {
        product.releaseDate=(new Date()).toString();
    }
    product.id=data.products.length+1;//temprary concept without database
    //push 
    data.products.push(product);
    res.status(201).json(product);

})
router.post("/product/:productId",function(req,res){
    const productId=parseInt(req.params.productId);
    if((!isNaN(productId)))
    {
        const product=req.body;
        if(!product)
        {
            res.json({message:"No product details"});
            return;
        }
        let matchingIndex;
        const matchingProduct=data.products.find(function(product,index)
        {
            if(product.id===productId)
            {
                matchingIndex=index;
            }
        });
        data.products[matchingIndex]={...matchingProduct,...product};

        res.json(data.products);

    }
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
        });
        if(product==undefined){
            res.status(404).json({message:"product not found with id:"+productId});

        }
        else{
            res.json(product);
        }

    }
    
})
module.exports=router;