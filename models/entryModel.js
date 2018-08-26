// Defining a mongoose schema
// including mongoose
var mongoose = require('mongoose');

// declaring a schema (or) database structure

var Schema = mongoose.Schema;

// entrySchema is an instance of Schema

var entrySchema = new Schema({


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


}, {
    timestamps: true
}); //for createdAt and updatedAt

// connect model and schema
mongoose.model('sampleEntry', entrySchema);