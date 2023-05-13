

const express = require('express') 
const router = express.Router() 
const logger = require('../../system/logger/index.js') 
const index = require('../../controllers/indexRoutes/indexRoutes.controller.js') 
const validateAccess = require('../../middleware/auth/validateToken.js')


module.exports = function(app)
  {
      try 
      {

        logger.info(' Building User Routes ')


        router.get('/', index.getHomePage ) 
        router.get('/courses', index.getCoursesPage ) 
        router.get('/faculties', index.getFacultiesPage ) 
        router.get('/students', index.getStudentsPage ) 
        router.get('/jobs', index.getJobsPage )
        router.get('/faq', index.getFaqPage ) 

        // Bind To app 
        app.use('/', router ) 

        logger.info(' Main Application Routes Built ') 
      }
      catch(e)
      {
        console.log('ERROR OCCURED WHILE BUILDING APPLICATION ROUTES ')
        console.log(e) 
      }
  }