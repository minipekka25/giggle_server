const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://slack_node_client:ak0mJCgJiMX5Inyx@cluster0.3ayeo.mongodb.net/black_master?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connection established with mongodb')
}).on('error', (error) => {
    console.log('error in connection : ', error)
})
