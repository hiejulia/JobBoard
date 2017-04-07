'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');









module.exports.register = registerUser;