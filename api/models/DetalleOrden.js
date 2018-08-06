/**
* DetalleOrden.js
*
* @description :: A model definition.  Represents a database table/collection/etc.
* @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {
  
  attributes: {
    
    idOrden:{
      type:"number"
    },
    idLibro:{
      type:"number"
    },
    precio:{
      type:"number"
    }
    
  },
  
};

