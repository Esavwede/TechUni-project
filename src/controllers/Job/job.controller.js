
const logger = require('../../system/logger/index') 
const { createJob, getJobsService, getJob, deleteJob, updateJob} = require('../../services/Job/job.service') 


const getComposeJobPage = async function(req, res, next)
            {
                try 
                {

                }
                catch(e)
                {

                }
}


const create = async function(req, res, next)
        {
            try 
            {
                
                // validate req 
                 await createJob(req.body) 

                 return res.send(' New Job Created ! ')

            }
            catch(e)
            {

                const statusCode = e.statusCode 


                switch( statusCode )
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


const getJobs = async function(req, res, next )
                {
                    try 
                    {
                       const numberOfJobsPerPage = 10
                       const numberOfJobsToSkip = 0

                       const jobs = await getJobsService(numberOfJobsPerPage, numberOfJobsToSkip ) 
                       return res.json( jobs ) 
        
                    }
                    catch(e)
                    {
        
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error('JOB_CONTROLLER_ERROR: => FIND_JOBS ') 
                                    logger.error(' Server encountered error while finding jobs ')
                                    return res.send(' Server Error ') 
        
                            case 400: 
                                    logger.error('CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(' Unknown Response Error Code at: FIND_JOBS_CONTROLLER  ') 
                                      return res.send(' Server Error: Could not find response ') 
        
        
                        }
                       
                    }
                }


const findOne = async function(req, res, next )
                {
                    try 
                    {
                        const id = req.params.id 
                        const job = await getJob(id)
                        return res.json(job) 
                    }
                    catch(e)
                    {
                    
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error('JOB_CONTROLLER_ERROR: => FIND_JOB ') 
                                    logger.error(' Server encountered error while finding Job ')
                                    return res.send(' Server Error ') 
        
                            case 400: 
                                    logger.error('CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(' Unknown Response Error Code at: FIND_JOBS_CONTROLLER  ') 
                                      return res.send(' Server Error: Could not find response ') 
        
        
                        }               
                    
                    }   
                }


const update = async function(req, res, next )
                {
                    try 
                    {
                        const update = req.body 
                        const id = req.params.id 
                        await updateJob( id, update )
                        return res.send('Job Updated ') 
                    }
                    catch(e)
                    {
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error('JOB_CONTROLLER_ERROR: => UPDATE_JOB ') 
                                    logger.error(' Server encountered error while updating Job ')
                                    return res.send(' Server Error, Could not update Job  ') 
        
                            case 400: 
                                    logger.error('CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(' Unknown Response Error Code at: DELETE_JOB_CONTROLLER  ') 
                                      return res.send(' Server Error: Could not find response ') 
        
                        }      
                    }
                }


 const deleteOne = async function(req, res, next )
                {
                    try 
                    {
                        logger.info(' Started Deleting Job ') 

                        const id = req.params.id
                        console.log(` Job_id : ${ id } `)
                        await deleteJob( id ) 
                        return res.send(' Job Deleted ') 
                    }
                    catch(e)
                    {
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error('JOB_CONTROLLER_ERROR: => DELETE_JOB ') 
                                    logger.error(' Server encountered error while deleting Job ')
                                    return res.send(' Server Error, Could not delete Job  ') 
        
                            case 400: 
                                    logger.error('CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(' Unknown Response Error Code at: DELETE_JOB_CONTROLLER  ') 
                                      return res.send(' Server Error: Could not find response ') 
        
                        }               
                    
                    }
}



module.exports = { getComposeJobPage, create, getJobs,  findOne, update, deleteOne  }