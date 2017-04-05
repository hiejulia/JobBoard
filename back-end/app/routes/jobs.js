'use strict';


const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/company');
const jobCtrl = require('../controllers/job');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');