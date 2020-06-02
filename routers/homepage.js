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
    
router.get("/:id", async (req, res) => {
    try{
        const { id } = req.params;
    
        console.log(id);
        if (isNaN(parseInt(id))) {
            return res.status(400).send({ message: "Homepage id is not a number" });
        }
        
        const homepage = await Homepage.findByPk(id, {
            include: [Story],
            order: [[Story, "createdAt", "DESC"]]
        });
        
        if (homepage === null) {
            return res.status(404).send({ message: "Homepage not found" });
        }
        
        res.status(200).send({ message: "ok", homepage });

    }catch(error){
        next(error)
    }
});


  });

module.exports= router;