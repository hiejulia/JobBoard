'use strict';

const ENV = process.env.NODE_ENV || 'development';//set env
//require
const http = require('http');
const express = require('express');
const config = require('./config');
//init app
const app = express();

const logger = require('./config/winston').init(app);

var server;
/**
 * set express variables
 */
app.set('config',config);
app.set('root',__dirname);
app.set('env',ENV);
//require
require('./config/mongoose').init(app);
require('./config/models').init(app);
require('./config/passport').init(app);
require('./config/express').init(app);
require('./config/routes').init(app);
//
app.get('/api/status',(req,res,next) => {
    res.json({message:'API is running'});
});

app.use((err,req,res,next)=>{
    logger.error(err);
    res.status(err.statusCode || 500).json(err);//internal server error
});
/**
 * start the app if loaded done
 */
if(!module.parent){
    server - http.createServer(app);
    server.listen(config.port || 3000,config.hostname,() => {
        let address = server.address();
        console.info(`Server is listening on port ${config.port}`);
        logger.info('Server is running', {
      app: config.app.name,
      hostname: addr.address,
      port: addr.port,
      environment: ENV.toLowerCase(),
      url: config.baseUrl
    });
    });
}

module.exports = app;