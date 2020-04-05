const express = require('express'),
router = express.Router(),
helper = require('../helpers/methods');

//view all customers
router.get('/customers', (req,res)=>{
    return helper.readAllCustomer()
            .then(data => res.status(config.successRequest.code).json({
                message: config.successRequest.message,
                data : data
            }))
            .catch(error => res.status(config.errorRequest.code).json({
                message: config.errorRequest.message,
                error: error
            }))
})


//view one customer
router.get('/customer', (req,res)=>{
    return helper.readCustomer({_id: req.body._id})
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