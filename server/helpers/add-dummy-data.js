const uuid = require('uuid/v4');

module.exports.product = [
{product_id: uuid().substr(1, 5), product_title: "Plastic Chairs", quantity_total: 10000, quantity_booked: 0, price: 20},
{product_id: uuid().substr(1, 5), product_title: "Tiffany Chairs", quantity_total: 5000, quantity_booked: 0, price: 25},
{product_id: uuid().substr(1, 5), product_title: "Bridal Chair", quantity_total: 10, quantity_booked: 0, price: 50},
{product_id: uuid().substr(1, 5), product_title: "Plastic Round Tables", quantity_total: 100, quantity_booked: 0, price: 125},
{product_id: uuid().substr(1, 5), product_title: "Plastic Rectangular Table", quantity_total: 90, quantity_booked: 0, price: 150}
]


module.exports.customer = [
    {customer_id: uuid().substr(1, 5), customer_name:"Naren"},
    {customer_id: uuid().substr(1, 5), customer_name:"Shubham"},
    {customer_id: uuid().substr(1, 5), customer_name:"Arvind"},
    {customer_id: uuid().substr(1, 5), customer_name:"Amit"},
    {customer_id: uuid().substr(1, 5), customer_name:"Animesh"}
]