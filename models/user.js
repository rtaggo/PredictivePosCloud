'use strict';

const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');

const secret_key = require('../config/keys').secret_key;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.generateJWT = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, secret_key); 
};

UserSchema.methods.toAuthJSON = function() {
  return {
    user: {
      _id: ''+this._id,
      email: this.email,
      name: this.name,
    },
    token: this.generateJWT()
  };
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
