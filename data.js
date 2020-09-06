var mongoose = require('mongoose');
require('dotenv').config();

//Object holding all your connection strings
var connections = {};
exports.getDatabaseConnection = function (dbName) {

    if (connections[dbName]) {
        //database connection already exist. Return connection object
        return connections[dbName];
    } else {
        connections[dbName] = mongoose.createConnection(process.env.MONGO_URL + dbName + '?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        return connections[dbName];
    }
}
