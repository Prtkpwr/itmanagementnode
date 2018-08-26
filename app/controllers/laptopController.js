const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')


/* Models */
const LaptopModel = mongoose.model('Laptop')

let getLaptopList = (req, res) => {
    LaptopModel.find(function(err, result) {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
};

let createLaptop = (req, res) => {
    var newLaptop = new LaptopModel({

        name: req.body.name,
        department: req.body.department,
        model: req.body.model,
        serial: req.body.serial,
        os: req.body.os,
        msoffice: req.body.msoffice,
        remarks: req.body.remarks
    });

    // save 
    newLaptop.save(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send({newLaptop:newLaptop,
            status:200});
        }
    });
}

let findSingleLaptop = (req, res) => {
    LaptopModel.findOne({
        '_id': req.params.Id
    }, function(err, result) {
        if (err) {
            console.log("Error");
            res.send(err);
        } else {
            res.send(result);
        }
    });
  
}

let findAndUpdateLaptop = (req, res) => {

    var update = req.body;
    
        //Find one and update it.
    
        LaptopModel.findOneAndUpdate({
            "_id": req.params.Id
        }, update, function(err, result) {
    
            if (err) {
                res.send(err);
            } else {
                console.log(result);
                res.send({result:result,
                status:200});
            }
    
        }); // findOneAndUpdate ends
}

let deleteLaptop = (req, res) => {
    LaptopModel.remove({
        _id: req.params.Id
    }, function(err, result) {


        if (err) {
            res.send(err);
        } else {
            res.send({
                status:200
            });
        }

    }); 
}

module.exports = {

    getLaptopList: getLaptopList,
    createLaptop: createLaptop,
    findSingleLaptop: findSingleLaptop,
    findAndUpdateLaptop:findAndUpdateLaptop,
    deleteLaptop:deleteLaptop


}// end exports