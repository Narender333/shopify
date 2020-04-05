const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Types = mongoose.Schema.Types,
modelName = "User";

const userSchema = new Schema({
    user_id:{
        type: Types.String,
        required: true
    },
    name: {
        type: Types.String,
        required: true
    },
    email: {
        type: Types.String,
        required: true
    },
    password:{
        type: Types.String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(modelName, userSchema);