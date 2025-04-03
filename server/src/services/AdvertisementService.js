const { Advertisement } = require('../../db/models');

class AdvertisementService {
  static async createAdvertisement({
    title,
    description,
    price,
    address,
    image,
    categoryId,
  }) {
    if (!title || !description || !price || !address || !image || !categoryId) {
      throw new Error('Не хватает данных для создания объявления');
    }

    const newAdvertisement = await Advertisement.create({
      title,
      description,
      price,
      address,
      image: [image],
      categoryId,
    });
    return newAdvertisement;
  }

  static async delete(id) {
    if (!id) {
      throw new Error('Id field is required');
    }
    if (Number.isNaN(Number(id))) {
      throw new Error('Id must be a number');
    }
    return Advertisement.destroy({ where: { id } });
  }

  static async update(id, title, description, price, address, image, categoryId) {
    const advert = await Advertisement.findByPk(id);

    return advert.update({ id, title, description, price, address, image: [image], categoryId });
  }

  // static async updateAdvertisement(id, {title, description, price, address, image, categoryId, userId}) {}
}

module.exports = AdvertisementService;
