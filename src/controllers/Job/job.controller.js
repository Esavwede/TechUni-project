
const logger = require('../../system/logger/index') 
const { createJob } = require('../../services/Job/job.service') 


const create = async function(req, res, next)
        {
            try 
            {
                
                // validate req 

                 await createJob(req.body) 

            }
            catch(e)
            {

                const errorCode = e.responseCode 


                switch( errorCode )
                {
                    case 500: 
                            logger.error('JOB_CONTROLLER_ERROR: => CREATE_JOB ') 
                            return res.send(' Server Error ') 

                    case 400: 
                            logger.error('CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                            return res.send(' Invalid User input ') 

                    default: 
                              logger.error(' Unknown Response Error Code ') 
                              return res.send(' Server Error: Could not find response ') 


                }
               
            }
        }


module.exports = { create }