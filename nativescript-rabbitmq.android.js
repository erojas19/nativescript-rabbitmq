"use strict";
var Client = (function () {
    function Client() {
        this.test = "Test";
        this.AMQP = com.rabbitmq.client.AMQP;
        this.Channel = new com.rabbitmq.client.Channel();
        this.Connection =  new com.rabbitmq.client.Connection();
        this.ConnectionFactory =  new com.rabbitmq.client.ConnectionFactory();
        this.Consumer =  new com.rabbitmq.client.Consumer();
        this.DefaultConsumer =  new com.rabbitmq.client.DefaultConsumer();
        this.Envelope =  new com.rabbitmq.client.Envelope();
        this.QueueingConsumer =  new com.rabbitmq.client.QueueingConsumer();
    }
    return Client;
}());
exports.Client = Client;
