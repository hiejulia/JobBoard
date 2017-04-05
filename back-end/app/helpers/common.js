'use strict';
function createSlug(name){
    return name
   .toLowerCase()
   .replace(/[^\w\s]+/g,'')
   .trim()
   .replace(/[\s]+/g,'-');
}


module.exports.createSlug = createSlug;