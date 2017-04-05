'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const ProfileBlock = mongoose.model('ProfileBlock');
const ObjectId = mongoose.Types.ObjectId;


//get user profile 
function getUserProfile(){

}

///create profile block 
function createUserProfileBlock(){

}


//update profile 
function updateUserProfile() {

} 






module.exports.getProfile = getUserProfile;
module.exports.createProfileBlock = createUserProfileBlock;
module.exports.updateProfile = updateUserProfile;