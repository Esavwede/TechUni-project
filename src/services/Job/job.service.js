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
                e.status = 500 
                reject(e) 
            }
        })
    }



module.exports = { createJob }