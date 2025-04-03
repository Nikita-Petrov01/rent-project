const { Advertisement } = require('../../db/models');

class AddressService {
  static async getAllAdress() {
    return Advertisement.findAll();
  }
}

module.exports = AddressService;
