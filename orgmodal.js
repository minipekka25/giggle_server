// const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://slack_node_client:ak0mJCgJiMX5Inyx@cluster0.3ayeo.mongodb.net/black?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connection.once('open', () => {
//     console.log('connection established with mongodb')
// }).on('error', (error) => {
//     console.log('error in connection : ', error)
// })


var mongoose = require('mongoose');

//Object holding all your connection strings
var connections = {};

exports.getDatabaseConnection = function (dbName) {

    if (connections[dbName]) {
        //database connection already exist. Return connection object
        return connections[dbName];
    } else {
        connections[dbName] = mongoose.createConnection('mongodb+srv://slack_node_client:ak0mJCgJiMX5Inyx@cluster0.3ayeo.mongodb.net/' + dbName +'?retryWrites=true&w=majority');
        return connections[dbName];
        console.log('db connected' + dbName)
    }
}



var db_name = 'tada'

const Schema = mongoose.Schema

const orgSchema = new Schema({
    name:String,
    workspaces:String
})

const mydb = mongoose.connection.useDb(db_name)

const org = mydb.model('organisation',orgSchema)


 module.exports = {
    modal: org,
    db_name: function (val) {
        db_name=val
       console.log(db_name)
    }
}