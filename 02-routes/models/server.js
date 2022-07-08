
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
        this.routes();

    };


    // middlewares
    middlewares() {

        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
        this.app.use( cors() );

    };


    // routes
    routes() {

        this.app.use( require( '../routes/tareas' ) )

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