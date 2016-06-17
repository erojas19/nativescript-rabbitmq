"use strict";

// Typically we want to wrap the native Java class in our own class; this makes extending it a lot easier
var Connection = function(nativeConnection) {
    this._connection = nativeConnection;
};
Connection.prototype.createChannel = function() {
    // Because we wrapped this class, we can add extra error checks or other helper functions
    if (!this._connection) {
        throw new Error("Attempting to create Channel on closed Connection!");
    }
    // But you don't actually have to wrap them, you can actually return the native
    // Java Class like I'm doing in this example.   (However my preference would be to wrap it)
    return this._connection.createChannel();
};
Connection.prototype.close = function() {
    this._connection.close();
    this._connection = null;
};
// TODO: Add whatever other "Connection" helper classes we need.




var ConnectionFactory = function() {
    this._factory = new com.rabbitmq.client.Connection.ConnectionFactory();
};

ConnectionFactory.prototype.setUsername = function(username)
{
   this._factory.setUsername(username);
};

ConnectionFactory.prototype.getUsername = function()
{
    return this._factory.getUsername().toString();
};

// ---------------------------------------------------------------------------------
// My Personal preference is actually combine the two of them into a single function
// But this is really your choice how you want to write your wrapper; you can follow it exactly
// like the original library; and do separate getters/setters.
// ---------------------------------------------------------------------------------
ConnectionFactory.prototype.username = function(username) {
    if (arguments.length) {
        this._factory.setUsername(username);
    } else {
        return this._factory.getUsername();
    }
};


ConnectionFactory.prototype.setPassword = function(password) {
    this._factory.setPassword(password);
};

ConnectionFactory.prototype.getPassword = function() {
    this._factory.getPassword();
};

// TODO: Should add the rest of the factory prototypes like set/get port, etc.

ConnectionFactory.prototype.newConnection = function() {
    return new Connection(this._factory.newConnection());
};

exports.ConnectionFactory = ConnectionFactory;


// TODO add any other classes that need to be exposed