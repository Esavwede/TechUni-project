
const logger = require('../../system/logger/index') 
const { createJob, getJobsService, getJob, deleteJob, updateJob} = require('../../services/Job/job.service') 



const getComposeJobPage = async function(req, res, next)
            {
                try 
                {
                    logger.info(' Getting Compose Page ') 
                    return res.render('compose') 
                }
                catch(e)
                {
                    logger.error(e,' Error occured while getting Compose Jobs Page ') 
                    return res.render('error',{error})
                }
            }


const create = async function(req, res, next)
        {
            try 
            {
                
                // validate req 
                 logger.info(' In create job route ') 
                 await createJob(req.body) 

                 return res.redirect('Jobs')

            }
            catch(e)
            {

                const statusCode = e.statusCode 


                switch( statusCode )
                {
                    case 500: 
                            logger.error(e,'JOB_CONTROLLER_ERROR: => CREATE_JOB ') 
                            return res.render("error")

                    case 400: 
                            logger.error(e,'CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                            return res.send(' Invalid User input ') 

                    default: 
                              logger.error(e,' Unknown Response Error Code ') 
                              return res.render("error")


                }
               
            }
        }


const getJobs = async function(req, res, next )
                {
                    try 
                    {
                       
                        logger.info(' Getting Jobs ') 
                       const numberOfJobsPerPage = 10
                       const numberOfJobsToSkip = 0


                       console.log(' Getting Jobs ') 

                       const jobs = await getJobsService(numberOfJobsPerPage, numberOfJobsToSkip ) 
                       console.log(jobs)
                       return res.render('posts', jobs )
                        
                    }
                    catch(e)
                    {
        
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error(e,'JOB_CONTROLLER_ERROR: => FIND_JOBS ') 
                                    logger.error(' Server encountered error while finding jobs ')
                                    return res.render("error")
        
                            case 400: 
                                    logger.error(e,'CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(e,' Unknown Response Error Code at: FIND_JOBS_CONTROLLER  ') 
                                      return res.render("error")
        
        
                        }
                       
                    }
                }


const findOne = async function(req, res, next )
                {
                    try 
                    {
                        logger.info(' Find One Job Controller ')
                        const id = req.params.id 
                        const job = await getJob(id)
                        console.log(' Triple Here ')
                        return res.render("post",{ job }) 
                    }
                    catch(e)
                    {
                    
                        console.log(e) 
                        const statusCode = e.statusCode 
        
        
                        switch( statusCode )
                        {
                            case 500: 
                                    logger.error('JOB_CONTROLLER_ERROR: => FIND_JOB ') 
                                    logger.error(e,' Server encountered error while finding Job ')
                                    return res.render("error") 
        
                            case 400: 
                                    logger.error(e,'CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      
                                      logger.error(e,' Unknown Response Error Code at: FIND_JOB_CONTROLLER  ') 
                                      return res.render("error") 
        
        
                        }               
                    
                    }   
                }


const update = async function(req, res, next )
                {
                    try 
                    {
                        logger.info(' Update Job Controller ')
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
                                    logger.error(e,'JOB_CONTROLLER_ERROR: => UPDATE_JOB ') 
                                    logger.error(' Server encountered error while updating Job ')
                                    return res.render("error")
        
                            case 400: 
                                    logger.error(e,'CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(e,' Unknown Response Error Code at: DELETE_JOB_CONTROLLER  ') 
                                      return res.render("error")
        
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
                                    logger.error(e,'JOB_CONTROLLER_ERROR: => DELETE_JOB ') 
                                    logger.error(' Server encountered error while deleting Job ')
                                    return res.render("error")
        
                            case 400: 
                                    logger.error(e,'CREATE_JOB_ERROR: => INVALID_USER_INPUT: 400')
                                    return res.send(' Invalid User input ') 
        
                            default: 
                                      logger.error(e,' Unknown Response Error Code at: DELETE_JOB_CONTROLLER  ') 
                                      return res.render("error")
        
                        }               
                    
                    }
}


const getAdminJobs = async function(req, res, next )
                {
                    try 
                    {
                       
                        logger.info(' Get admin jobs Handler ') 
                       const numberOfJobsPerPage = 10
                       const numberOfJobsToSkip = 0


                       console.log(' Getting Jobs ') 

                       const posts = await getJobsService(numberOfJobsPerPage, numberOfJobsToSkip ) 
                       
                      
                       return res.render('adminJobs',{ posts })
                        
                    }
                    catch(e)
                    {
                        logger.error(e,' Error Occured While getting Job Created by Admin ')
                        return res.render("error")
                    }
                }




module.exports = { getComposeJobPage, create, getJobs,  findOne, update, deleteOne, getAdminJobs  }