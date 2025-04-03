const {Advertisement} = require('../../db/models');

class AdvertisementService {
    static async createAdvertisement({title, description, price, address, image, categoryId, userId}) {
        
        if(!title || !description || !price || !address || !image || !categoryId || !userId) {
            throw new Error('Не хватает данных для создания объявления');
        }

        const newAdvertisement = await Advertisement.create({title, description, price, address, image, categoryId, userId});
        return newAdvertisement;
    }   

    // static async updateAdvertisement(id, {title, description, price, address, image, categoryId, userId}) {}
}