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
    
}









//export function of company controller 
module.exports.create = createCompany;
module.exports.findById = findCompanyById;
module.exports.getAll = getAllCompanies;