const express = require('express');
const router = express.Router();
const computerController = require("./../../app/controllers/computerController");
const appConfig = require("./../../config/appConfig");

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/computer`;

    // defining routes.
    app.get(`${baseUrl}/list`, computerController.getComputerList);
    app.post(`${baseUrl}/create`, computerController.createComputer);
    app.get(`${baseUrl}/:Id`, computerController.findSingleComputer);
    app.put(`${baseUrl}/edit/:Id`, computerController.findAndUpdateComputer);
    app.delete(`${baseUrl}/delete/:Id`, computerController.deleteComputer);

}
