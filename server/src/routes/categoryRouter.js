const express = require('express');
const categoryRouter = express.Router();
const {Category} = require('../../db/models')

categoryRouter.get('/', async (req, res) =>{
    try{
        const category = await Category.findAll(
        )
        res.status(200).json(category)
    } catch(error){
        console.log(error); 
        res.status(500).send(error);
    }
})


module.exports = categoryRouter;