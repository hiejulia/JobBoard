'use strict';


const mongoose = require('mongoose');
const config = require('./index');

function initMongoose(app){
    //connection to mongodb open 
    mongoose.connect(config.mongodb.uri);

  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  if (app) {
      //set variables 
    app.set('mongoose', mongoose);
  }

  return mongoose;
};

function cleanup() {
    //close mongodb connection 
  mongoose.connection.close(() => {
    // console.log('Closing DB connections and stopping the app. Bye bye.');
    process.exit(0);
  });
}


module.exports.init = initMongoose;