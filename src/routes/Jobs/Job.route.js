
const express = require('express') 
const router = express.Router() 
const logger = require('../../system/logger/index.js') 

const job = require('../../controllers/Job/job.controller') 


module.exports = function(app)
  {
      try 
      {

        logger.info(' Building Jobs Routes ')


        // Job Routes 
        router.post('/', job.create )
        router.get('/', job.getJobs ) 
        router.get('/:id', job.findOne ) 
        router.patch('/:id', job.update ) 
        router.delete('/:id', job.deleteOne ) 



        // Bind To app 
        app.use('/job', router ) 


        logger.info(' Jobs Routes Built ') 
      }
      catch(e)
      {
        console.log('JOBS_ROUTE_BUILD_ERROR')
        console.log(e) 
      }
  }