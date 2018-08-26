'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let computerSchema = new Schema({
    name: {
        type: String,
        default:''
    },
    department: {
        type: String,
        default:''
    },
    motherboard: {
        type: String,
        default:''
    },
    cpu: {
        type: String,
        default:''
    },
    ram: {
        type: String,
        default:''
    },
    hdd: {
        type: String,
        default:''
    },
    monitor: {
        type: String,
        default:''
    },
    keyboard: {
        type: String,
        default:''
    },
    mouse: {
        type: String,
        default:''
    },
    os: {
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


mongoose.model('Computer', computerSchema);