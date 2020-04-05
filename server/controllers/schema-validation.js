// add class for validation

var Validator = require('jsonschema').Validator;
var v = new Validator();

const transactionSchema = {
    "id": "/transactionSchema",
    "type": "object",
    "properties": {
      "product_id": {"type": "string"},
      "customer_id": {"type": "string"},
      "transaction_type": {"type": "string"},
      "transaction_date_time": {"type": "string"},
      "quantity": {"type": "integer", "minimum": 1}
    }
  },
productSchema = {
    "id": "/transactionSchema",
    "type": "object",
    "properties": {
      "product_title": {"type": "string"},
      "quantity_total": {"type": "integer", "minimum": 1},
      "quantity_booked": {"type": "integer"},
      "price": {"type": "integer", "minimum": 1}
    }
  }

module.exports.transactionValidation = (req,res,next)=>{
    //console.log(v.validate(req.body, transactionSchema))
    const result = v.validate(req.body, transactionSchema);
    if(result && result.errors && result.errors.length){
        return res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: result.errors
        })
    }

    return next();
}

module.exports.productValidation = (req,res,next)=>{
    //console.log(v.validate(req.body, productSchema))
    const result = v.validate(req.body, productSchema);
    if(result && result.errors && result.errors.length){
        return res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: result.errors
        })
    }

    return next();
}