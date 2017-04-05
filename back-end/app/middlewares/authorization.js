'use strict';

function authorizeOnlyToCompanyMembers(req, res, next){
    //check if member is the member of the company 
    const isMember = req.resources.company.members.find((member) => {
        return member.toString() === req.user._id.toString();
    });
    if(!isMember) {
        return res.status(403).json({message:'Unauthorized member'});
    }
    next();//go to the next middlewares


}


module.exports.onlyMembers = authorizeOnlyToCompanyMembers;




// router.put(
//   '/companies/:companyId',
//   auth.ensured,
//   companyCtrl.findById,
//   authorize.onlyOwner,
//   companyCtrl.update,
//   response.toJSON('company')
// );