'use strict';



function initModels(app) {
    const modelsPath = app.get('root') + '/app/models/';//get the model path 

  ['profile-block', 'user', 'company', 'job', 'application'].forEach(function(model) {
    require(modelsPath + model);//require every model in the model path
  });



}







module.exports.init = initModels;