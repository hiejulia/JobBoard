'use strict';
//authorization for the Members of the company 
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
//authorization for owner of the company
function authorizeOnlyToCompanyOwner(req, res, next) {
  const isOwner = req.resources.company.owner.toString() === req.user._id.toString();

  if (!isOwner) {
    return res.status(403).json({ message: 'Unauthorized owner of the company' });
  }

  next();
}
//authorization for the user 
function authorizeOnlySelf(req, res, next) {
  const isSelf = req.resources.user._id.toString() === req.user._id.toString();

  if (!isSelf) {
    return res.status(403).json({ message: 'Unauthorized user ' });
  }

  next();
}


//exports modules 
module.exports.onlyOwner = authorizeOnlyToCompanyOwner;
module.exports.onlyMembers = authorizeOnlyToCompanyMembers;
module.exports.onlySelf = authorizeOnlySelf;




// router.put(
//   '/companies/:companyId',
//   auth.ensured,
//   companyCtrl.findById,
//   authorize.onlyOwner,
//   companyCtrl.update,
//   response.toJSON('company')
// );