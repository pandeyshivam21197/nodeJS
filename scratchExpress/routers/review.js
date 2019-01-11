const express=require("express");
const router=express.Router();

const data=require("/home/nineleaps/Desktop/node js exmpls/npmodules/scratchExpress/data/seed.json");

router.get("/review",function(req,res){
    res.status(400).json(data.reviews)
})

router.get("/review/:reviewId",function(req,res){
    const reviewId=parseInt(req.params.reviewId);
    if(!isNaN(reviewId))
    {
        const review=data.reviews.filter(function(rev){
            return(rev.id===reviewId);
        })
        if(review==undefined)
        {
            res.status(404).json({"message":"no reviews found for the review id:"+reviewId});
        }
        else{
            res.json(review);
        }
    }
})

router.get("/product/:productId/review",function(req,res){
    const productId=parseInt(req.params.productId);
    
    if(!isNaN(productId))
    {
        const review=data.reviews.filter(function(rev)
        {
            return(rev.productId===productId)
            
        });
        if(review===undefined)
        {
            res.status(404).json({"message":"No reviews found for product id:"+productId});
        }
        else{
            res.json(review);
        }
    }
})
module.exports=router;