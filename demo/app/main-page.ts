import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';

var rabbitmq = require('nativescript-rabbitmq');

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    var factory = new rabbitmq.ConnectionFactory();
    factory.setUsername("me");
    factory.setPassword("you");
    var conn = factory.newConnection();
    var channel = conn.createChannel();

    // Do Whatever with the channel

    channel.close();
    conn.close();

}
