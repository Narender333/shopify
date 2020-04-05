const mongoose = require('mongoose'),
deprecationWarning = 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
//load models from files if any?

//basic connection functionality
module.exports = ()=>{
    mongoose.connect(
        config.mongoUrlBuilder(config.dbUsername, config.dbPassword), 
        deprecationWarning
        )
        .then(success=> console.log('DB Connected Successfully'))
        .catch(error=> console.error(error))
}