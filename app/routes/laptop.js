const express = require('express');
const router = express.Router();
const laptopController = require("./../../app/controllers/laptopController");
const appConfig = require("./../../config/appConfig");

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/laptop`;

    // defining routes.
    app.get(`${baseUrl}/list`, laptopController.getLaptopList);
    app.post(`${baseUrl}/create`, laptopController.createLaptop);
    app.get(`${baseUrl}/:Id`, laptopController.findSingleLaptop);
    app.put(`${baseUrl}/edit/:Id`, laptopController.findAndUpdateLaptop);
    app.delete(`${baseUrl}/delete/:Id`, laptopController.deleteLaptop);

}