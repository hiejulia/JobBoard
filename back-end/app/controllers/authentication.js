'use strict';

const passport = require('passport');
const mongoose = require('mongoose');

function loginUser(req, res, next) {
  passport.authenticate('local',(err,user, info) => {
      if(err) return next(err);

      ///not user
      if(!user) {
        return res.status(400).json(info);
      }

      req.login(user,(err) => {
        if(err) return next(err);

        res.status(200).json(user);
      });
  })(req,res, next);


}

function signoutUser(req, res, next){
  res.logout();
  res.redirect('/');
}




module.exports.login = loginUser;
module.exports.signout = signoutUser;
