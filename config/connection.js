const { connect, connection } = require('mongoose');

// const connectionString = process.env.MONGOB_URI || 'mongod://localhost:27017/socialNetworkApi';
connect('mongodb://localhost/socialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;