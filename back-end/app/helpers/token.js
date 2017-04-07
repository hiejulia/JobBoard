'use strict';

const LEN = 16;
const crypto = require('crypto');
//generate a random token using node crypto


function generateToken(randomBytes, callback){
    if (typeof randomBytes === 'function') {
    callback = randomBytes;
    randomBytes = LEN;
  }

  randomBytes = randomBytes / 2;//token in heximal

  crypto.randomBytes(randomBytes, (err, buf) => {
    if (err) {
      return callback(err);
    }

    var token = buf.toString('hex');

    callback(null, token);
  });

}






module.exports.generate = generateToken;