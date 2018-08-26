'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let laptopSchema = new Schema({
    name: {
        type: String,
        default:''
    },
    department: {
        type: String,
        default:''
    },
    model: {
        type: String,
        default:''
    },
    serial: {
        type: String,
        default:''
    },
    os: {
        type: String,
        default:''
    },
    msoffice: {
        type: String,
        default:''
    },
    remarks: {
        type: String,
        default:''
    }


},
 {
    timestamps: true
});


mongoose.model('Laptop', laptopSchema);