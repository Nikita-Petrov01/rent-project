const AddressController = require('../controllers/addressController');
const addressRouter = require('express').Router();

addressRouter.get('/', AddressController.getAllAdress);

module.exports = addressRouter