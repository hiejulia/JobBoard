"use strict";

const ENV = process.env.NODE_ENV || 'development';//set env

const http = require('http');
const express = require('express');
const config = require('./config');
//init app
const app = express();
const logger = require('./config/winston').init(app);

var server;
