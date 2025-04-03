const express = require('express');
const advertisementRouter = express.Router();
const { Advertisement } = require('../../db/models');

const AdvertisementController = require('../controllers/AdvertisementController');

// const { Category } = require('../../db/models');


advertisementRouter.get('/', async (req, res) => {
  try {
    const advertisement = await Advertisement.findAll();
    res.status(200).json(advertisement);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

advertisementRouter.get('/:id', async (req, res) => {
  try {
    const advertisement = await Advertisement.findByPk(req.params.id);
    if (!advertisement) {
      return res.status(404).json({ massege: 'Объявление не найдено' });
    }
    res.status(200).json(advertisement);
  } catch (error) {
    console.log(error);
    res.status(500).set(error);
  }
});

// advertisementRouter.get('/category/:id/title', async (req, res) => {
//   try {
//     const category = await Category.findByPk(req.params.id);
//     res.status(200).json({
//       categoryId: req.params.id,
//       title: category.title,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });



advertisementRouter.post('/create', AdvertisementController.createAdvertisement);
advertisementRouter.delete('/:id', AdvertisementController.delete);
advertisementRouter.put('/update/:id', AdvertisementController.update);

module.exports = advertisementRouter;
