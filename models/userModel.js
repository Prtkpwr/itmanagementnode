//Defining a mongoose schema
// including mongoose
var mongoose = require('mongoose');

// declaring a schema (or) database structure

var Schema = mongoose.Schema;

// entrySchema is an instance of Schema

var userSchema = new Schema({


    username: {
        type: String,
        default:''
    },
    password: {
        type: String,
        default:''
    },
    firstName: {
        type: String,
        default:''
    },
    lastName: {
        type: String,
        default:''
    },
    email: {
        type: String,
        default:''
    },
    userType:{
        type:String,
        default:'user'
    }


}, {
    timestamps: true
}); //for createdAt and updatedAt

// connect model and schema
mongoose.model('sampleUsers', userSchema);