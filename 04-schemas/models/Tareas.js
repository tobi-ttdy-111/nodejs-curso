
// imports
const { Schema, model } = require( 'mongoose' );


// schemaTareas
const schemaTareas = Schema({


    materia: {
        type: String,
        require: [ true, 'La materia es obligatoria' ]
    },

    titulo: {
        type: String,
        require: [ true, 'El titulo es de ahuevito' ]
    },

    descripcion: {
        type: String
    },

    fecha: {
        type: Date
    },

    calificacion: {
        type: Number
    },

    nombre: {
        type: String,
        required: [ true, '¿Como te llamas?' ]
    },

    estado: {
        type: Boolean,
        default: true
    }


});


// exports
module.exports = model( 'tarea', schemaTareas );