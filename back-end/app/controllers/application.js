'use strict';

//create application 
function createApplication(req,res, next){
    Application.create({
        user:req.user._id,
        job:req.params.jobId
    },(err, application ) => {
        if(err){
            console.log(err);
            return next(err);
        }
        res.status(201).json(application);
    });

}

//find application by _id
function findApplicationById(req, res, next){
    //check for valid id 
    if (!ObjectId.isValid(id)) {
    res.status(404).send({ message: 'Invalid application id. Not found '});
  }

  Application.findById(req.params.applicationId,(err,application) => {
      if(err){
          return next(err);
      }
      res.resources.application = application;
    next();
  });

}
//get all jobs application 
function getAllApplications(req, res, next) {
  const limit = +req.query.limit || 50;//set limit
  const skip = +req.query.skip || 0;//set skip 
  //set query 
  let query = {
    job: req.params.jobId
  };

  if (req.query.status) {
    query.status = req.query.status;
  }

  Application
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec((err, applications) => {
    if (err) {
      return next(err);
    }

    req.resources.applications = applications;
    next();
  });

}
//update an applicatin by id
function updateApplication(req, res, next) {
    ///get the application by req
  req.resources.application.status = req.body.status;
  //save 
  req.resources.application.save((err, updatedApplication) => {
    if (err) {
      return next(err);
    }

    res.json(updatedApplication);
  });
}

//remove the application 
function removeApplication(req,res, next){
    //get the id of the application
    //Application delete 
    req.resources.application.remove((err) => {
        if(err){
            return next(err);
        }
        res.json(req.resources.application);
    });
}

module.exports.create = createApplication;
module.exports.findById = findApplicationById;
module.exports.getAll = getAllApplications;
module.exports.update = updateApplication;
module.exports.remove = removeApplication;