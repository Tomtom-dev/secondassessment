const { Router } = require("express");

const Homepage= require('../models').homepage
const Story = require('../models').story

const router = new Router();


router.get("/", async (req, res,next) => {
    try{
        const allHomepages =await Homepage.findAll();
        console.log(allHomepages);
        
        res.json(allHomepages)
    }catch(error){
        next(error)
    }
     
  });

module.exports= router;