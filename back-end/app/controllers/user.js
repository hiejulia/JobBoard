'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Company = mongoose.model('Company');
const ProfileBlock = mongoose.model('ProfileBlock');
const ObjectId = mongoose.Types.ObjectId;