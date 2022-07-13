
// imports
const mongoose = require( 'mongoose' );


// connection
const connection = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log( 'Base de datos conectada' )
    } catch ( err ) {
        console.log( `Error al conectar la base de datos \n${ err }` )
    };

};


// exports
module.exports = connection;