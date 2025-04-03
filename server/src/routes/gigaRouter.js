const gigaRouter = require('express').Router();
const GigaService = require('../services/GigaService');
const { Advertisement } = require('../../db/models');

gigaRouter.post('/search', async (req, res) => {
  try {
    const { query } = req.body;
    console.log('запрос с клиента', query);
    const advertisements = await GigaService.getAllAdvertisements();
    console.log('все объявленияяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяя', advertisements);
    const id = await GigaService.getGigaResponse(query, advertisements);
    const advertisement = await Advertisement.findByPk(id);
    res.status(200).json(advertisement);
  } catch (error) {
    console.error(error, 'Ошибка ИИ');
  }
});

module.exports = gigaRouter;
