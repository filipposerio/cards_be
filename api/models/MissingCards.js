/**
* MissingCards.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  attributes: {
  	idUser: {
      type: 'string',
      required: 'true'
    },
  	idAlbum: {
      type: 'string',
      required: 'true'
    },
  	idUserAlbum: {
      type: 'string',
      required: 'true'
    },    
    card: {
      type: 'string',
      required: 'true'
    },
      toJSON: function () {
      var obj = this.toObject();
      return obj;
    }
  }
};
