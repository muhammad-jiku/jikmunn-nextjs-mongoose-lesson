//  external import
const mongoose = require('mongoose');

//  internal import
const demoSchema = require('../schemas/demoSchema');

const Demo = mongoose.models.Demo || new mongoose.model('Demo', demoSchema);

module.exports = Demo;
