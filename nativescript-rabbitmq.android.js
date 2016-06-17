"use strict";
var RabbitMQ = (function () {
    function RabbitMQ(test) {
        this.test = "Hello Android";
        this.test2 = test;
    }
    return RabbitMQ;
}());
exports.RabbitMQ = RabbitMQ;
