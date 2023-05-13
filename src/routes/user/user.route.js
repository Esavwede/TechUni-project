
const express = require('express') 
const router = express.Router() 
const logger = require('../../system/logger/index.js') 
const user = require('../../controllers/user/user.controller.js') 
const validateAccess = require('../../middleware/auth/validateToken.js')

module.exports = function(app)
  {
      try 
      {

        logger.info(' Building User Routes ')


        // get signin page needed 
        router.post('/', user.signin )
        router.get('/', user.getSigninPage ) 

        // test route
        router.get('/secured', validateAccess ,(req, res, next)=>{ res.send(' In a secured route ') })

        // Bind To app 
        app.use('/signin', router ) 

        logger.info(' User Routes Built ') 
      }
      catch(e)
      {
        console.log('JOBS_ROUTE_BUILD_ERROR')
        console.log(e) 
      }
  }