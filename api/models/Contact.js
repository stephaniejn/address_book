/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	firstName:{
  		type:'string',
  		required:true
  	},
	lastName: {
  		type:'string',
  		required:true
  	},
	email: {
  		type:'string'
  	},
	streetAddress: {
  		type:'string'
  	},
	city: {
  		type:'string'
  	},
	state: {
  		type:'string'
  	},
	zip: {
  		type:'string'
  	},
	phone: {
  		type:'string'
  	},
	notes: {
  		type:'text'
  	},
  }
};

