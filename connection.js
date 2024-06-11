const mongoose =  require('mongoose');

const dbUser = process.env.DB_USER;

const dbPassword = process.env.DB_PASS;

const connect = () => { mongoose.connect ('mongodb+srv://Tnodejs:cindy2105@apicom.wjzpqo3.mongodb.net/?retryWrites=true&w=majority&appName=Apicom"')

    const connection = mongoose.connection;

    connection.on('error', () =>
         console.error('Error connecting to MongoDB'))

    connection.once('open', () => 
        console.log('Connected to MongoDB'))};

    connect();
 
  module.exports = connect;