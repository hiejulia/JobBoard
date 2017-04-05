'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const Company = mongoose.model('Company');
/**
 * CREATE COMPANY 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function creatCompany(req, res ,next) {
    let data = _.pick(req.body,['name','country','address']);
    data.owner = req.user._id;
    data.members = [req.user._id];

    Company.create(data,(err, company) => {
        if(err) {
            console.error(err);
            return next(err);
        }
        res.status(201).json(company);
    })

}

/**
 * GETTING THE COMPANY BY COMPANY ID 
 */
function findCompanyById(req,res, next){
    if(!ObjectId.isValid(id)){
        res.status(404).send({message:'Invalid company ID'});
    }

    //find by id
    Company.findById(req.params.companyId,(err, company) => {
        if(err) {
            console.error(err);
            return next(err);
        }
        req.resources.company = company;
        next();
    })

}
/**GET ALL THE COMPANY  */
function getAllCompanies(req,res, next){
    const limit = + req.query.limit || 50;
    const skip = +req.query.skip || 0;
    let query = _.pick(req.query,['country']);
    Company
  .find(query)
  .limit(limit)
  .skip(skip)
  .exec((err, companies) => {
    if (err) {
      return next(err);
    }

    req.resources.companies = companies;
    next();
  });
}
//UPDATE COMPANY 
function updateCompany(req, res, next){
    let data = _.pick(req.body, ['name', 'country', 'address']);
    _.assign(req.resources.company,req.body);
    req.resources.company.save((err,updatedCompany) => {
        if(err){
            return next(err);
        }
        req.resources.company = updatedCompany;
        next();
    })

}
//ADD A COMPANY MEMBER 
function addCompanyMember(req, res, next) {
    let includes = _.includes(req.resources.company.members, req.body.member);
    if(includes){
        return res.status(409).json({message:'User is already a member of your company',type: 'already_member'});
    }
    req.resources.company.members.push(req.body.user);
    req.resources.company.save((err, updatedCompany) => {
    if (err) {
      return next(err);
    }

    req.resources.company = updatedCompany;
    next();
  });


}

//REMOVE COMPANY MEMBER 
function removeCompanyMember(req, res, next) {

}





//export function of company controller 
module.exports.create = createCompany;
module.exports.findById = findCompanyById;
module.exports.getAll = getAllCompanies;
module.exports.update = updateCompany;
module.exports.addMember = addCompanyMember;
module.exports.removeMember = removeCompanyMember;