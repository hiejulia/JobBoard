'use strict';
//set the env to test
process.env.NODE_ENV = 'test';
var chai = require('chai');
var should = chai.should();
var config = require('../../config/environments/development');
//start the test
describe('User model', function () {
    var mongoose;
    var User;
    var _user;
    var newUserData = {
        email: 'test@test.com',
        password: 'testpassword',
        name: 'Test User'
    }

    before(function(done){
         mongoose = require('../../config/mongoose').init();
    User = require('../../app/models/user');
    done();
});


after(function(done){
    User.remove({}).exec(function(err){
        if(err) {
            throw err;
        }
        //else
        mongoose.connection.close(function(){
            setTimeout(function(){
                done();
            },1000);
        });
    });
});
//it => register user 
it('should register a user', function(done) {
    User.register(newUserData,function(err,user){
        if(err){
            throw err;
        }
        should.exist(user);
        user.email.should.equal(newUserData.email);
        should.not.exist(user.password);
        should.not.exist(user.passwordSalt);
      should.exist(user.createdAt);
      user.active.should.equal(true);
      _user = user;
      done();

    });
});

//it => not register if exist 
it('should not register a user if already exists', function(done) {
    User.register(newUserData, function(err, user) {
        should.exist(err);
        err.code.should.equal(11000); // duplicate key error
        should.not.exist(user);
        done();

    });

});

//should authentication user with valid credentials
it('should authenticate a user with valid credentials', function(done) {
    User.authenticate(newUserData.email, 'user_password', function(err, user) {
      if (err) throw err;

      should.exist(user);
      should.not.exist(user.password);
      should.not.exist(user.passwordSalt);
      user.email.should.equal(newUserData.email);
      done();
    });
  });
//not authenticate with invalid credentials
it('should not authenticate a user with invalid credentials',function(done){
    User.authenticate(newUserData.email,'notuserpassword',function(err, user){
        if (err) throw err;
        should.not.exist(user);
        done();
    });
});

//test when user change password
it('should change the password of the user ',function(done){
    _user.changePassword('user_password', 'new_user_password', function(err, result) {
      if (err) throw err;
      should.exist(result);

    });

});



});