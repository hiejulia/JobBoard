'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const mainCtrl = require('../controllers/main');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');
//get all the users 
router.get('/users',auth.ensured,userCtrl.getAll,mainCtrl.toJSON('users'));
//get one user by id 
router.get('/users/:userId',auth.ensured,userCtrl.findById,mainCtrl.toJSON('user'));
//edit one user by user id
router.put('/users/:userId',auth.ensured,userCtrl.findById,authorize.onlySelf,userCtrl.update,mainCtrl.toJSON('user'));
//delete one user by user id 
router.delete('/users/:userId',auth.ensured,userCtrl.delete);
//get profile of one user by user id 
router.get('/users/:userId/profile',auth.ensured,userCtrl.getProfile,response.toJSON('user'));
//create new blocks of user profile 
router.post('/users/:userId/profile/blocks',auth.ensured,userCtrl.getProfile,authorize.onlySelf,userCtrl.createProfileBlock,response.toJSON('block'));
//edit block of user profile by the block id 
router.put('/users/:userId/profile/blocks/:blockId',auth.ensured,userCtrl.getProfile,authorize.onlySelf,userCtrl.updateProfile,response.toJSON('block'));
//get the companies of one user by user id 
router.get('/users/:userId/companies',auth.ensured,userCtrl.getUserCompanies,response.toJSON('companies'));

module.exports = router;