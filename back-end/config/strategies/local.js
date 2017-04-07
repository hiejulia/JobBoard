'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

function initLocalStrategy() {
    passport.use('local',new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (email,password,done) => {
            User.authenticate(email, password,(err,user ) => {
                if (err) {
                    return done(err);
                }

                if(!user){
                    return done(null,false,{message:'Invalid email or password.'});
                }
                //ok 
                return done(null, user);
            })
        }
    ) )
}






module.exports.init = initLocalStrategy;