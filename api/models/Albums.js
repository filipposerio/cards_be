/**
* Albums.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,
  attributes: {
  	name: {
      type: 'string',
      required: 'true',
      unique: true // Yes unique one
    },
  	descr: {
      type: 'string',
      required: 'true'      
    },
  	year: {
      type: 'integer',
      required: 'true'      
    },
      toJSON: function () {
      var obj = this.toObject();
      return obj;
    }
  }
};
