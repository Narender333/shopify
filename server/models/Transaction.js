const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Types = mongoose.Schema.Types,
modelName = "Transaction";

const transactionSchema = new Schema({
    transaction_id:{
        type: Types.String,
        required: true
    },
    transaction_date_time: {
        type: Types.Number,
        required: true
    },
    customer_id: {
        type: Types.String,
        required: true
    },
    product_id:{
        type: Types.String,
        required: true
    },
    transaction_type:{
        type: Types.String,
        enum: ['OUT', 'IN']
    },
    quantity:{
        type: Types.Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(modelName, transactionSchema);