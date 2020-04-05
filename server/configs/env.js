module.exports = {
    serverPort : 6000,
    dbUsername: "Narender",
    dbPassword: "Narender1",
    mongoUrlBuilder: function (username, password){
        return `mongodb://${username}:${password}@ds035517.mlab.com:35517/shopify`
    },
    successRequest:{
        code: 200,
        message: "Request processed successfully"
    },
    errorRequest: {
        code : 400,
        message: "Error in processing request"
    },
    notFoundRequest:{
        code : 404,
        message: "Request not found"
    },
    saltRounds: 10,
    secret: 'secret'
}