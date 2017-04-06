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

});