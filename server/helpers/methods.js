const Customer = require('../models/Customer'),
Transaction = require('../models/Transaction'),
Product = require('../models/Product'),
User = require('../models/User');

// -- Product helper methods
// add new record in Product
module.exports.addProduct = (payload)=>{
    return new Promise((response, reject)=>{
        return new Product(payload)
        .save()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read record in Product
module.exports.readProduct = (payload)=>{
    return new Promise((response, reject)=>{
        return Product
        .findOne(payload)
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read all record in Product
module.exports.readAllProduct = ()=>{
    return new Promise((response, reject)=>{
        return Product
        .find()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// update all record in Product
module.exports.updateProduct = (_id, payload)=>{
    return new Promise((response, reject)=>{
        return Product
        .findOneAndUpdate(
            {_id},
            {$set: payload},
            {new: true}
        )
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// delete record in Product
module.exports.deleteProduct = (_id)=>{
    return new Promise((response, reject)=>{
        return Product
        .findOneAndRemove({_id})
        .then(data => response(data))
        .catch(error => reject(error))
    })
}



// -- Customer helper methods
// add new record in Customer
module.exports.addCustomer = (payload)=>{
    return new Promise((response, reject)=>{
        return new Customer(payload)
        .save()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read record in Customer
module.exports.readCustomer = (payload)=>{
    return new Promise((response, reject)=>{
        return Customer
        .findOne(payload)
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read all record in Customer
module.exports.readAllCustomer = ()=>{
    return new Promise((response, reject)=>{
        return Customer
        .find()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// update all record in Customer
module.exports.updateCustomer = (_id, payload)=>{
    return new Promise((response, reject)=>{
        return Customer
        .findOneAndUpdate(
            {_id},
            {$set: payload},
            {new: true}
        )
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// delete record in Customer
module.exports.deleteCustomer = (_id)=>{
    return new Promise((response, reject)=>{
        return Customer
        .findOneAndRemove({_id})
        .then(data => response(data))
        .catch(error => reject(error))
    })
}


// -- Transaction helper methods
// add new record in Transaction
module.exports.addTransaction = (payload)=>{
    return new Promise((response, reject)=>{
        return new Transaction(payload)
        .save()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read record in Transaction
module.exports.readTransaction = (payload)=>{
    return new Promise((response, reject)=>{
        return Transaction
        .findOne(payload)
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read all record in Transaction
module.exports.readAllTransaction = ()=>{
    return new Promise((response, reject)=>{
        return Transaction
        .find()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// update all record in Transaction
module.exports.updateTransaction = (_id, payload)=>{
    return new Promise((response, reject)=>{
        return Transaction
        .findOneAndUpdate(
            {_id},
            {$set: payload},
            {new: true}
        )
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// delete record in Transaction
module.exports.deleteTransaction = (_id)=>{
    return new Promise((response, reject)=>{
        return Transaction
        .findOneAndRemove({_id})
        .then(data => response(data))
        .catch(error => reject(error))
    })
}


// -- User helper methods
// add new record in User
module.exports.addUser = (payload)=>{
    return new Promise((response, reject)=>{
        return new User(payload)
        .save()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read record in User
module.exports.readUser = (payload)=>{
    return new Promise((response, reject)=>{
        return User
        .findOne(payload)
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// read all record in User
module.exports.readAllUser = ()=>{
    return new Promise((response, reject)=>{
        return User
        .find()
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// update all record in User
module.exports.updateUser = (_id, payload)=>{
    return new Promise((response, reject)=>{
        return User
        .findOneAndUpdate(
            {_id},
            {$set: payload},
            {new: true}
        )
        .then(data => response(data))
        .catch(error => reject(error))
    })
}

// delete record in User
module.exports.deleteUser = (_id)=>{
    return new Promise((response, reject)=>{
        return User
        .findOneAndRemove({_id})
        .then(data => response(data))
        .catch(error => reject(error))
    })
}