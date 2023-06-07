

const { getJobsService } = require('../../services/Job/job.service') 
const logger = require('../../system/logger/index')


const getHomePage = function(req, res, next)
        {
            try 
            {
                logger.info('Index Route ') 
                return res.render("index") 
            }
            catch(e)
            {
                logger.error(e,'Error occured while getting index route')
                return res.render("error",e) 
            }
        }


        const getCoursesPage = function(req, res, next)
        {
            try 
            {
                logger.info('Gettign Courses Page ')
                return res.render("courses") 
            }
            catch(e)
            {   
                logger.error(e,'Error occured while getting courses page ') 
                return res.render("error",e) 
            }
        }


        const getFacultiesPage = function(req, res, next)
        {
            try 
            {
                logger.info('Getting Faculties Page ') 
                return res.render("faculties") 
            }
            catch(e)
            {
                logger.error(e,"error occured while getting faculties page ") 
                return res.render("error",e) 
            }
        }


        const getStudentsPage = function(req, res, next)
        {
            try 
            {
                logger.info(' Getting Students Page ')
                return res.render("students") 
            }
            catch(e)
            {
                logger.error(e," Error occured while getting Students Page ")
                return res.render("error",e) 
            }
        }
          

        const getFaqPage = function(req, res, next)
        {
            try 
            {
                logger.info('Getting faq page ') 
                return res.render("faq") 
            }
            catch(e)
            {
                logger.error(e,'error occured while getting faq page ') 
                return res.render("error",e) 
            }
        } 


        const getJobsPage = async function(req, res, next)
        {
            try 
            {

                logger.info(" Getting Jobs Page ")
                logger.info(" Getting Jobs for jobs page ") 
                
                const numberOfJobsPerPage = 7
                const numberOfJobsToSkip = 0 
                const posts = await getJobsService(numberOfJobsPerPage, numberOfJobsToSkip)

                
                return res.render("jobs",{ posts }) 
            }
            catch(e)
            {
                console.log(e) 
                logger.error(e,' Error Occured while getting jobs page ') 
                return res.render("error",e) 
            }
        }

       

module.exports = { getHomePage, getCoursesPage, getFacultiesPage, getStudentsPage, getFaqPage, getJobsPage } 
          