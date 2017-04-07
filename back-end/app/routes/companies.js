'use strict';

const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/company');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

//create a company 
router.post('/companies',auth.ensured,,companyCtrl.checkUserCompany,companyCtrl.create);
//get
router.get('/companies',companyCtrl.getAll,response.toJSON('companies'));
//get company by id 
router.get('/companies/:companyId',companyCtrl.findById,response.toJSON('company'));
//update a company
router.put('/companies/companyId',auth.ensured,companyCtrl.findById,authorize.onlyOwner,companyCtrl.update,response.toJSON('company'));
//add company member 
router.post('/companies/:companyId/members',auth.ensured,companyCtrl.findById,authorize.onlyOwner,companyCtrl.addMember,response.toJSON('company'));
//remove a company member
router.delete('/companies/:companyId/members',auth.ensured,companyCtrl.findById,authorize.onlyOwner,companyCtrl.removeMember,response.toJSON('company'));

//exports 
module.exports = router;