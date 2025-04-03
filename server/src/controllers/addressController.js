const AddressService = require('../services/addressService');

class AddressController {
  static async getAllAdress(req, res) {
    try {
      const advert = await AddressService.getAllAdress();
      res.status(200).json(advert);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AddressController;
