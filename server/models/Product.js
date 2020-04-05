const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Types = mongoose.Schema.Types,
modelName = "Product";

const productSchema = new Schema({
    product_id:{
        type: Types.String,
        required: true
    },
    product_title: {
        type: Types.String,
        required: true
    },
    quantity_total: {
        type: Types.Number,
        required: true
    },
    quantity_booked:{
        type: Types.Number,
        required: true
    },
    price:{
        type: Types.Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(modelName, productSchema);