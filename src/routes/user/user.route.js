
const express = require('express') 
const router = express.Router() 
const logger = require('../../system/logger/index.js') 


module.exports = function(app)
  {
      try 
      {

        logger.info(' Building User Routes ')





        // Bind To app 
        app.use('/user', router ) 

        logger.info(' User Routes Built ') 
      }
      catch(e)
      {
        console.log('JOBS_ROUTE_BUILD_ERROR')
        console.log(e) 
      }
  }