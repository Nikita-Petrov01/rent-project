const express = require('express');
const advertisementRouter = express.Router();
const {Advertisement} = require('../../db/models')

advertisementRouter.get('/', async (req, res) =>{
    try{
        const advertisement = await Advertisement.findAll(
        )
        res.status(200).json(advertisement)
    } catch(error){
        console.log(error); 
        res.status(500).send(error);
    }
})


module.exports = advertisementRouter;