'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const Schema = mongoose.Schema;

const listSchema = Schema({
  hex: { type: String, required: true },
  colorGroup: { type: String, requied: true}
});

module.exports = mongoose.model('list', listSchema);
