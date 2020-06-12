const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema(
    {
        firstName:{
            type:String
        },

        lastName:{
            type: String
        },
        email:{
            type:String,
            required:true
        },
       basicSal:{
         type:Number
       },
        createdDate:{
            type:Date,
            default:Date.now()
        }

    }
)
module.exports = mongoose.model('employees',Employee);