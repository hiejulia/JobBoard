'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const config = require('./index');




function initExpress(app) {


}




    module.exports.init = initExpress;