

const { getJobsService } = require('../../services/Job/job.service') 


const getHomePage = function(req, res, next)
        {
            try 
            {
                console.log(' Getting Index Route ')
                return res.render("index") 
            }
            catch(e)
            {
                return res.render("error",e) 
            }
        }


        const getCoursesPage = function(req, res, next)
        {
            try 
            {
                console.log(' Getting Courses ')
                return res.render("courses") 
            }
            catch(e)
            {   
                console.log('Error occured while getting Courses page ')
                return res.render("error",e) 
            }
        }


        const getFacultiesPage = function(req, res, next)
        {
            try 
            {
                console.log(' Getting Faculties')
                return res.render("faculties") 
            }
            catch(e)
            {
                console.log('Error occured while getting faculties page ')
                return res.render("error",e) 
            }
        }



        const getStudentsPage = function(req, res, next)
        {
            try 
            {
                console.log(' Getting Students Page ')
                return res.render("students") 
            }
            catch(e)
            {
                console.log('Error occured while getting Students page ')
                return res.render("error",e) 
            }
        }
          


        const getFaqPage = function(req, res, next)
        {
            try 
            {
                console.log(' Getting Faq Page')
                return res.render("faq") 
            }
            catch(e)
            {
                console.log('Error occured while getting Faq page ')
                return res.render("error",e) 
            }
        }


        const getJobsPage = async function(req, res, next)
        {
            try 
            {
                const numberOfJobsPerPage = 7
                const numberOfJobsToSkip = 0 
                const posts = await getJobsService(numberOfJobsPerPage, numberOfJobsToSkip)
                console.log( posts[0]._id )
                return res.render("jobs",{ posts }) 
            }
            catch(e)
            {
                console.log('Error occured while getting Jobs page ')
                return res.render("error",e) 
            }
        }


module.exports = { getHomePage, getCoursesPage, getFacultiesPage, getStudentsPage, getFaqPage, getJobsPage } 
          