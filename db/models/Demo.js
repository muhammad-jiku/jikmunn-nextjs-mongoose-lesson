const mongoose = require('mongoose');
const demoSchema = require('../schemas/demoSchema');

const Demo = new mongoose.model('Demo', demoSchema);

module.exports = Demo;
