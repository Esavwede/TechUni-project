
const logger = require('../system/logger/index') 
const jobRoutes = require('./Jobs/Job.route') 
const userRoutes = require('./user/user.route.js') 

module.exports = function buildRoutes(app)
        {
          try 
          {
            logger.info('Building Application Routes ')


            userRoutes(app) 
            jobRoutes(app)


            logger.info(' Application Routes Built ')
          }
          catch(e)
          {
            logger.error(e,"APPLICATION_ROUTES_BUILD_ERROR")
          }
        }