const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('./server/helpers/mongoose');


//set global config
global.config = require('./server/configs/env');


//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//mongodb middleware
mongoose();

//adding router
app.use('/', require('./server/routes'))

//open port to listen
app.listen(config.serverPort, ()=>{
    console.log(`listening on port ${config.serverPort}`);
})

//handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', err => {
    console.error("uncaught-Exception", err);
    process.exit(1);
  });

process.on('unhandledRejection', (reason, promise) => {
        console.error('unhandled-rejection-at-promise', JSON.stringify({ "reason": reason, "promise": promise }));
        process.exit(1);
});