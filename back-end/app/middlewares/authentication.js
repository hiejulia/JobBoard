'use strict';
function ensureAuthenticated(req, res, next){
    //if the user is authenticated => go to the next middleware 
    if (req.isAuthenticated()) {
    return next();
  }
else {//if not authenticated 
res.format({
    html:function(){
        res.redirect('/login');
    },
    text:function(){
        res.redirect('/login');
    },
    json:function(){
        res.status(401).json({message:'Invalid authenticated user!'});
    }
});
}
};




module.exports.ensured = ensureAuthenticated