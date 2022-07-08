
// imports
const express = require( 'express' );
const cors = require( 'cors' );


// Server
class Server {


    // constructor
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();

    };


    // middlewares
    middlewares() {

        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
        this.app.use( cors() );

    };


    // listen
    listen() {

        this.app.listen( this.port, () => {
            console.log( `Escuchando en el puerto ${ this.port }` );
        });

    };


};


// exports
module.exports = Server;