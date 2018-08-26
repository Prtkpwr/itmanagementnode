const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

/* Models */
const ComputerModel = mongoose.model('Computer')




let getComputerList = (req, res) => {
    ComputerModel.find(function(err, result) {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
  

}


let createComputer = (req, res) => {
    var newComputer = new ComputerModel({

        name: req.body.name,
        department: req.body.department,
        motherboard: req.body.motherboard,
        cpu: req.body.cpu,
        ram: req.body.ram,
        hdd: req.body.hdd,
        monitor: req.body.monitor,
        keyboard: req.body.keyboard,
        mouse: req.body.mouse,
        os: req.body.os,
        remarks: req.body.remarks,
    });

    // save 
    newComputer.save(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send({newComputer:newComputer,
            status:200});
        }
    });
    
}




let findSingleComputer = (req, res) => {
    ComputerModel.findOne({
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

let findAndUpdateComputer = (req, res) => {

    var update = req.body;
    
        //Find one and update it.
    
        ComputerModel.findOneAndUpdate({
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

let deleteComputer = (req, res) => {
    ComputerModel.remove({
        _id: req.params.Id
    }, function(err, result) {


        if (err) {
            res.send(err);
        } else {
            res.send({
                status:200
            });
        }

    }); //  remove blog ends
}



module.exports = {

    getComputerList: getComputerList,
    createComputer: createComputer,
    findSingleComputer: findSingleComputer,
    findAndUpdateComputer:findAndUpdateComputer,
    deleteComputer:deleteComputer


}// end exports