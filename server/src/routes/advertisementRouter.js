const express = require('express');
const advertisementRouter = express.Router();
const { Advertisement } = require('../../db/models');
const AdvertisementController = require('../controllers/AdvertisementController');

advertisementRouter.get('/', async (req, res) => {
  try {
    const advertisement = await Advertisement.findAll();
    res.status(200).json(advertisement);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

advertisementRouter.post('/create', AdvertisementController.createAdvertisement);
advertisementRouter.delete('/:id', AdvertisementController.delete);
advertisementRouter.put('/update/:id', AdvertisementController.update);

module.exports = advertisementRouter;
