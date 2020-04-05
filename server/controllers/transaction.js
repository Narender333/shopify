const express = require('express'),
router = express.Router(),
helper = require('../helpers/methods'),
uuid = require('uuid/v4'),
schemaValidation = require('./schema-validation'),
moment = require('moment'),
authorization = require('../helpers/authorization');


//create a transaction
router.post('/transaction',
    schemaValidation.transactionValidation,
    authorization,
    (req,res)=>{

    const {
        customer_id, 
        product_id, 
        transaction_type, 
        transaction_date_time, 
        quantity
    } = req.body;

    //convert date-time to unix time
    const unixTime = Math.round((new Date(transaction_date_time)).getTime() / 1000);

    //check if there if product with given product_id

    return helper.readProduct({
        product_id
    })
    .then(data => {
        if (!data){
            throw {
                scope: 'product',
                message: `No products found with product_id: ${product_id}`
            }
        }

        console.log(data);

        if((data.quantity_booked < data.quantity_total) && (data.quantity_booked + quantity <= data.quantity_total)) 
        {
            const tempQuantity = data.quantity_booked + quantity;
            return helper.updateProduct(data._id, {
                quantity_booked : tempQuantity
            })
        }

        else{
            throw {
                scope: 'product',
                message: `Not Enough quantities available with product_id: ${product_id}`
            }
        }
    })
    .then(data => {
        if(!data){
            throw {
                scope: 'product',
                message: `Error updating items with product_id: ${product_id}`
            }   
        }
        return helper.readCustomer({customer_id})
    })
    .then(data => {
        if (!data){
            throw {
                scope: 'customer',
                message: `No customers found with customer_id: ${customer_id}`
            }
        }

        return helper.addTransaction({
            transaction_id: uuid().substr(1, 5),
            customer_id, 
            product_id, 
            transaction_type, 
            transaction_date_time :  unixTime,
            quantity
        })
    })
    .then(data=>{
        return res.status(config.successRequest.code).json({
            message: config.successRequest.message,
            data : data
        });
    })
    .catch(error => {
        if(error.scope){
            return res.status(config.notFoundRequest.code).json(error);
        }
        return  res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: error
        });
    })

})
//view all transactions
router.get('/transactions', (req,res)=>{
    return helper.readAllTransaction()
            .then(data => {
                let result = [];
                if (data.length){
                    result = data
                            .map((item, index) =>
                                ({
                                    transaction_id: item.transaction_id,
                                    customer_id: item.customer_id,
                                    product_id: item.product_id,
                                    transaction_type: item.transaction_type,
                                    transaction_date_time: moment(item.transaction_date_time * 1000).format('YYYY-MM-DD, HH:MM:SS'),
                                    quantity: item.quantity,
                                    createdAt: item.createdAt,
                                    updatedAt: item.updatedAt
                                }))
                }

                res.status(config.successRequest.code).json({
                    message: config.successRequest.message,
                    data : result
                })
            })
            .catch(error => res.status(config.errorRequest.code).json({
                message: config.errorRequest.message,
                error: error
            }))
})


//view one transaction
router.get('/transaction', (req,res)=>{
    return helper.readTransaction({_id: req.body._id})
            .then(data => res.status(config.successRequest.code).json({
                message: config.successRequest.message,
                data : data
            }))
            .catch(error => res.status(config.errorRequest.code).json({
                message: config.errorRequest.message,
                error: error
            }))
})

module.exports = router;