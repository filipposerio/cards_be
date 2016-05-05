/**
* MissingCards.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  attributes: {
    albumcard: {
        model:'albums', required:true
    },
    card: {
      type: 'string',
      required: 'true'
    },
    textdescription: {
      type: 'string'
    },    
    foundby: { 
    		model: 'users'
    },
      toJSON: function () {
      var obj = this.toObject();
      return obj;
    }
  }
};

