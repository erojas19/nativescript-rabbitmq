declare var com: any;

export class Client {
    test: string = "Test";
    
    AMQP: Function;
    Channel: Function;
    Connection: Function;
    ConnectionFactory: Function;
    Consumer: Function;
    DefaultConsumer: Function;
    Envelope: Function;
    QueueingConsumer: Function;

    constructor(){
        this.AMQP = com.rabbitmq.client.AMQP;
        this.Channel = com.rabbitmq.client.Channel;
        this.Connection = com.rabbitmq.client.Connection;
        this.ConnectionFactory = com.rabbitmq.client.ConnectionFactory;
        this.Consumer = com.rabbitmq.client.Consumer;
        this.DefaultConsumer = com.rabbitmq.client.DefaultConsumer;
        this.Envelope = com.rabbitmq.client.Envelope;
        this.QueueingConsumer = com.rabbitmq.client.QueueingConsumer;
    }
}