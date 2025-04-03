const AdvertisementService = require('../services/AdvertisementService');

class AdvertisementController {
  static async createAdvertisement(req, res) {
    try {
      const advert = await AdvertisementService.createAdvertisement(req.body);
      res.status(201).json(advert);
    } catch (error) {
      console.error(error);
      res.status(500).json({ text: 'Ошибка создания объявления', error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      await AdvertisementService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ text: 'Ошибка удаления объявления', error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        price,
        address,
        image,
        categoryId,
      } = req.body;
      console.log('id', id, 'njejcdkml', req.body);
      const updateAdvert = await AdvertisementService.update(
        id,
        title,
        description,
        price,
        address,
        image,
        categoryId,
      );
      res.status(201).json(updateAdvert);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'Ошибка со стороны сервера при изминение данных в таблице Avert',
      });
    }
  }
}

module.exports = AdvertisementController;
