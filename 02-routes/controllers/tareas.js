
// imports
const { request, response } = require( 'express' );


// getTareas
const getTareas = ( req = request, res = response ) => {

    res.json({ msg: 'isiste un get /tareas' });

};


// postTareas
const postTareas = ( req = request, res = response ) => {

    res.json({ msg: 'isiste un post /tareas' });

};


// putTareas
const putTareas = ( req = request, res = response ) => {

    res.json({ msg: 'isiste un put /tareas' });

};


// deleteTareas
const deleteTareas = ( req = request, res = response ) => {

    res.json({ msg: 'isiste un delete /tareas' });

};


// exports
module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
};