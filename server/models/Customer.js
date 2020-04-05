const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Types = mongoose.Schema.Types,
modelName = "Customer";

const customerSchema = new Schema({
    customer_id:{
        type: Types.String,
        required: true
    },
    customer_name: {
        type: Types.String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(modelName, customerSchema);