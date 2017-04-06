'use strict';

const mongoose = require('mongoose');
const passwordHelper = require('../helpers/password');
const Schema = mongoose.Schema;
const _ = require('lodash');
const ProfileBlockSchema = mongoose.model('ProfileBlock').schema;


let userSchema = new userSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require:true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordSalt: {
        type: String,
        required: true,
        select: false
    },
    active: {
        type: Boolean,
        default: true
    },
    roles: {
        type: [
            {
                type: String,
                enum: ['user', 'member', 'owner']
            }
        ],
        default: ['user']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



//authenticate user 

function authenticateUser(email, password, callback){
    //find by email
    this.findOne({ email: email })
    .select('+password +passwordSalt')
  .exec((err, user) => {
      //if err 
    if (err) {
      return callback(err, null);
    }
    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }
    //verify the password with existing hash from the user 
     passwordHelper.verify(password,user.password,user.passwordSalt,(err, pwResult) => {
        if (err) {
          return callback(err, null);
        }

        // if password does not match don't return user
        if (pwResult === false) {
          return callback(err, null);
        }

        // remove password and salt from the result
        user.password = undefined;
        user.passwordSalt = undefined;
        // return user if everything is ok
        //else case 
        callback(err, user);
      }
    );
  });

}

//register new user 
function registerUser(credentials, cb){
    let data = _.cloneDeep(credentials);
    //hash the password 
    passwordHelper.hash(credentials.password, (err, hashedPassword, salt) => {
     if (err) {
       return callback(err);//return cb with error
     }

     data.password = hashedPassword;
     data.passwordSalt = salt;


    //create the user 
      //save the user to the mongodb
    this.model('User').create(data, (err, user) => {
       if (err) {
         return callback(err, null);
       }
       // remove password and salt from the result
       user.password = undefined;
       user.passwordSalt = undefined;
       // return user if everything is ok
       callback(err, user);
     });
   });


}
//change user password 
function changeUserPassword(oldPassword, newPassword, callback){
    //find the user password by id 
    this.model('User')
            .findById(this.id)
            .select('+password +passwordSalt')
            .exec((err, user) => {
                if (err) {//if erro return user null = no user return 
                return callback(err, null);
                }


    //if no user found return the empty user
    if(!user){
        return callback(err, user);
    }

    //use password helper with verify function
    passwordHelper.verify(oldPassword,
       user.password,
       user.passwordSalt,
       (err, result) => {
         if (err) {
           return callback(err, null);
         }
         //if password not match return user null
         if(!result){
             let PassNoMatchError = new Error('Old password does not match.');
           PassNoMatchError.type = 'old_password_does_not_match';
           return callback(PassNoMatchError, null);
         }
          //if yes,


    //generate new password

    //save the user with new password in the mongodb 
    passwordHelper.hash(newPassword, (err, hashedPassword, salt) => {
           this.password = hashedPassword;
           this.passwordSalt = salt;
this.save((err, saved) => {
             if (err) {
               return callback(err, null);
             }

             if (callback) {
               return callback(null, {
                 success: true,
                 message: 'Password changed successfully.',
                 type: 'password_change_success'
               });
             }
           });
         });
       }
     );
   });
 }




UserSchema.statics.authenticate = authenticateUser;
UserSchema.statics.register = registerUser;
UserSchema.methods.changePassword = changeUserPassword;

module.exports = mongoose.model('User', UserSchema);