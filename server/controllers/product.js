const express = require('express'),
router = express.Router(),
helper = require('../helpers/methods'),
uuid = require('uuid/v4'),
schemaValidation = require('./schema-validation');

router.post('/product', 
    schemaValidation.productValidation, 
    (req,res)=>{
    
    const {
        product_title, 
        quantity_total, 
        quantity_booked, 
        price
    } = req.body;
    
    helper.addProduct({
        product_id: uuid().substr(1, 5),
        product_title,
        quantity_total,
        quantity_booked,
        price
    })
    .then(data => res.status(config.successRequest.code).json({
        message: config.successRequest.message,
        data : data
    }))
    .catch(error => res.status(config.errorRequest.code).json({
        message: config.errorRequest.message,
        error: error
    }))
})


//view all products
router.get('/products', (req,res)=>{
    return helper.readAllProduct()
            .then(data => res.status(config.successRequest.code).json({
                message: config.successRequest.message,
                data : data
            }))
            .catch(error => res.status(config.errorRequest.code).json({
                message: config.errorRequest.message,
                error: error
            }))
})


//view one product
router.get('/product', (req,res)=>{
    return helper.readProduct({_id : req.body._id})
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