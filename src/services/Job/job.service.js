

const logger = require('../../system/logger/index') 
const Job = require('../../model/Job.model') 



        const createJob = function(job)
    {
        return new Promise(async(resolve, reject)=>{
            try 
            {
                logger.info(' Creating New Job ') 


                const newJob = new Job(job) 
                await newJob.save() 
                resolve() 

                logger.info(' New Job Created ') 
            }
            catch(e)
            {
                logger.error(e,'JOB_SERVICE_ERROR: => CREATE_JOB_ERROR ') 
                e.statusCode = 500 
                reject(e) 
            }
        })
        }

        const getJobsService = function( numberOfJobsPerPage, numberOfJobsToSkip)
        {
            return new Promise(async(resolve, reject)=>{
                try 
                {
                    const jobs = await Job.find({}).sort({ createdAt: -1 }).limit(  numberOfJobsPerPage ).skip( numberOfJobsToSkip )
                    resolve(jobs) 
                }
                catch(e)
                {
                    logger.error(e,'JOB_SERVICE_ERROR: => GET_JOBS_ERROR ') 
                    logger.error(' Database Encountered error while fetching jobs ') 
                    e.statusCode = 500 
                    reject(e) 
                }
            })
        }


        const getJob = function(_id)
        {
            return new Promise( async(resolve, reject)=>{
                try 
                {
                    const job =  await Job.findOne({ _id })
                    console.log( job ) 
                    resolve(job)
                } 
                catch(e)
                {
                    logger.error(e,'JOB_SERVICE_ERROR: COULD NOT GET JOB WITH ID ' + _id ) 
                    e.statusCode = 500
                    reject(e) 
                }
            })
        }

        
        const updateJob = function( _id, update )
        {
            return new Promise( async(resolve, reject)=>{
                try 
                {
                    const updated = await Job.updateOne({ _id }, update )
                    console.log( updated )
                    resolve() 
                }
                catch(e)
                {
                    logger.error(e,'JOB_SERVICE_ERROR: COULD NOT GET JOB WITH ID ' + id ) 
                    e.statusCode = 500 
                    reject(e) 
                }
            })
        }

        const deleteJob = function( _id )
        {
            return new Promise( async(resolve, reject)=>{
                try 
                {
                    logger.info('JOB_SERVICE: DELETING JOB ')
                    console.log(_id) 
                    const { deletedCount } = await Job.deleteOne({ _id })

                    if( deletedCount )
                    { 
                        logger.info(' Job Deleted ') 
                        resolve() 
                    }
                    else 
                    {
                        logger.error(' Job Service Could not delete job ') 
                        const deletionError = new Error(' Job Could not be deleted ') 
                        deletionError.statusCode = 500
                        reject(deletionError) 
                    }
                 
                }
                catch(e)    
                {
                    logger.error(e,'JOB_SERVICE_ERROR: COULD NOT GET JOB WITH ID ' + _id ) 
                    e.statusCode = 500 
                    reject(e) 
                }
            })
        }


module.exports = { createJob, getJobsService, getJob, updateJob, deleteJob }