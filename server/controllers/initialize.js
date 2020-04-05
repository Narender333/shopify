const express = require('express'),
router = express.Router(),
dummyData = require('../helpers/add-dummy-data'),
Customer = require('../models/Customer'),
Product = require('../models/Product'),
Transaction = require('../models/Transaction');

// Initialize the data with a button click
// Product Data: Add 5 products. Refer to report section for sample data
// Customer Data: Add 5 customer.
// Rent Transaction Data: Remove all transational data

router.get('/', (req,res)=>{
    let cusPromise = [],
        prodPromise = [];
    
    Customer.deleteMany({})
    .then( data => {
        //adding dummy customers
        dummyData.customer.forEach(cus => {
            cusPromise.push((new Customer(cus)).save());
        })
        
        return Promise.all(cusPromise)
    })
    .then(data => {
        console.log("customers added");
        return Product.deleteMany({})
    })
    .then(data => {
        //adding dummy products
        dummyData.product.forEach(prod => {
            prodPromise.push((new Product(prod)).save());
        })

        return Promise.all(prodPromise)
    })
    .then(data =>{
        console.log("products added");

        //remove transaction collection if exists
        return Transaction.exists()
    })
    .then(bool=>{
        if(bool){
            return Transaction.deleteMany({})
        }
        else {
            throw {
                scope: "No Collection"
            }
        }
    })
    .then(data => {
        return res.send('collection emptied');
    })
    .catch(error =>{
        if(error.scope && error.scope === "No Collection"){
            return res.send("No Collection to drop")
        }
        return res.send(error)
    })
})

module.exports = router;