'use strict';


const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/company');
const jobCtrl = require('../controllers/job');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');


//get all jobs
router.get('/jobs',jobCtrl.getAll,response.toJSON('job'));
//get one job by job id 
router.get('/jobs/:jobId',jobCtrl.findById,response.toJSON('job'));
//get all jobs of a certain company id
router.get('/companies/:companyId/jobs',auth.ensured,companyCtrl.findById,authorize.onlyMembers,jobCtrl.create);
//update 
router.put('/companies/:companyId/jobs/:jobId',auth.ensured,companyCtrl.findById,authorize.onlyMembers,jobCtrl.findById,jobCtrl.update);
//create new job 

router.post('/companies/:companyId/jobs',auth.ensured,companyCtrl.findById,authorize.onlyMembers,jobCtrl.create);
router.delete('/companies/:companyId/jobs/:jobId',auth.ensured,companyCtrl.findById,authorize.onlyMembers,jobCtrl.findById,jobCtrl.remove);


module.exports = router;