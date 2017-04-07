'use strict';
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');//model User

function initPassport(app){
    passport.serializeUser((user,done) => {
        done(null,user.id);
    });

    passport.deserializeUser((user,done) => {
        User.findById(id,done);

    });

    //load strategies
    require('./strategies/local').init();
}


//exports
module.exports.init = initPassport;