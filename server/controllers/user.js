const express = require('express'),
router = express.Router(),
uuid = require('uuid/v4'),
bcrypt = require('bcrypt'),
helper = require('../helpers/methods'),
jwt = require('jsonwebtoken');


//add new User
router.post('/user', (req,res)=>{
    const { name, email, password } = req.body;
    uid = uuid().substr(1, 5);

    userObj = {
        user_id: uid,
        name,
        email,
        password
    };

    return bcrypt.hash(
            userObj.password, 
            config. saltRounds
            ) 
            .then(hash => {
                userObj.password = hash;
                return helper.addUser(userObj)
            })
            .then(user=>{
                console.log(`user added ${user}`);
                return helper.addCustomer({
                    customer_id: user.user_id,
                    customer_name: user.name
                })
            })
            .then(customer=>{
                return res.send(customer);
            })
            .catch(error => {
                console.log(error);
                return res.send(error);
            })

})

router.get('/login', (req,res)=>{
    const { email, password } = req.body;
    let user;
    return helper.readUser({email})
        .then(data => {
            if(!data){
                return res.status(config.errorRequest.code).json({
                    message: config.errorRequest.message,
                    error: "No email Found"
                })
            }
            user  = data;
            return bcrypt.compare(password, data.password)
        })
        .then(data=>{
            if(!data){
                return res.status(config.errorRequest.code).json({
                    message: config.errorRequest.message,
                    error: "Password Not Matched"
                }) 
            }

            return res.status(config.successRequest.code).json({
                message: config.successRequest.message,
                data: jwt.sign({
                    email,
                    user_id: user.user_id,
                    name: user.name,
                }, 
                config.secret, 
                { expiresIn: 60 * 60 })
            })
        })
        .catch(error => res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: error
        }))
})

module.exports = router;