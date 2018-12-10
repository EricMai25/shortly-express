const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    if(!req.headers.Cookies){
      models.Sessions.create().then(result => result.insertId).then((id)=>{
        return models.Sessions.get(id)
      }).then((result)=>{
          
          req.session = {}
          req.session.hash = result.session
          res.cookies['shortlyid'] = result.session 
      })
    }else{
        
    }
    next()
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

