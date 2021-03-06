const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log( 'Database online' );

    } catch ( err ) {
        console.log( err );
    }
};

module.exports = {
    dbConnection
}