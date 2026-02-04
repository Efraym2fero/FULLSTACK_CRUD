const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false
    }
},
{
    Timestamp:true,
}
)

const users = mongoose.model("user",usersSchema);
module.exports = users;