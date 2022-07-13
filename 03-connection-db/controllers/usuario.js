
// imports
const { request, response } = require( 'express' );


// getUsuario
const getUsuario = ( req = request, res = response ) => {

    res.json({ msj: 'get /usuario' });

};


// postUsuario
const postUsuario = ( req = request, res = response ) => {

    res.json({ msj: 'post /usuario' });

};


// putUsuario
const putUsuario = ( req = request, res = response ) => {

    res.json({ msj: 'put /usuario' });

};


// deleteUsuario
const deleteUsuario = ( req = request, res = response ) => {

    res.json({ msj: 'delete /usuario' });

};


// exports
module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
};