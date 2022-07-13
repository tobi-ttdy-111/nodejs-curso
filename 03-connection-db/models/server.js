
// imports
const express = require( 'express' );
const cors = require( 'cors' );
const connection = require( '../database/connection' );


// Server
class Server {


    // constructor
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.dbConnection();
        this.middlewares();
        this.routes();

    };


    // dbConnection
    async dbConnection() {

        await connection();

    };


    // middlewares
    middlewares() {

        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
        this.app.use( cors() );

    };


    // routes
    routes() {

        this.app.use( require( '../routes/usuario' ) );

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
